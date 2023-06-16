import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SalesStoryInterface {
  id?: string;
  title: string;
  content: string;
  status: string;
  author_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface SalesStoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  status?: string;
  author_id?: string;
  organization_id?: string;
}
