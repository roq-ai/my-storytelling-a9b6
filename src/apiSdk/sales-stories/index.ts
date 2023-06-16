import axios from 'axios';
import queryString from 'query-string';
import { SalesStoryInterface, SalesStoryGetQueryInterface } from 'interfaces/sales-story';
import { GetQueryInterface } from '../../interfaces';

export const getSalesStories = async (query?: SalesStoryGetQueryInterface) => {
  const response = await axios.get(`/api/sales-stories${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSalesStory = async (salesStory: SalesStoryInterface) => {
  const response = await axios.post('/api/sales-stories', salesStory);
  return response.data;
};

export const updateSalesStoryById = async (id: string, salesStory: SalesStoryInterface) => {
  const response = await axios.put(`/api/sales-stories/${id}`, salesStory);
  return response.data;
};

export const getSalesStoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/sales-stories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSalesStoryById = async (id: string) => {
  const response = await axios.delete(`/api/sales-stories/${id}`);
  return response.data;
};
