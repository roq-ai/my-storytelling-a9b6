import { ExpertStoryInterface } from 'interfaces/expert-story';
import { SalesStoryInterface } from 'interfaces/sales-story';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  expert_story?: ExpertStoryInterface[];
  sales_story?: SalesStoryInterface[];
  user?: UserInterface;
  _count?: {
    expert_story?: number;
    sales_story?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
