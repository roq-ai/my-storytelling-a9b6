import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { expertStoryValidationSchema } from 'validationSchema/expert-stories';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.expert_story
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getExpertStoryById();
    case 'PUT':
      return updateExpertStoryById();
    case 'DELETE':
      return deleteExpertStoryById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getExpertStoryById() {
    const data = await prisma.expert_story.findFirst(convertQueryToPrismaUtil(req.query, 'expert_story'));
    return res.status(200).json(data);
  }

  async function updateExpertStoryById() {
    await expertStoryValidationSchema.validate(req.body);
    const data = await prisma.expert_story.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteExpertStoryById() {
    const data = await prisma.expert_story.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
