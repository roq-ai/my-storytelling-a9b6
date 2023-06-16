import axios from 'axios';
import queryString from 'query-string';
import { ExpertStoryInterface, ExpertStoryGetQueryInterface } from 'interfaces/expert-story';
import { GetQueryInterface } from '../../interfaces';

export const getExpertStories = async (query?: ExpertStoryGetQueryInterface) => {
  const response = await axios.get(`/api/expert-stories${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createExpertStory = async (expertStory: ExpertStoryInterface) => {
  const response = await axios.post('/api/expert-stories', expertStory);
  return response.data;
};

export const updateExpertStoryById = async (id: string, expertStory: ExpertStoryInterface) => {
  const response = await axios.put(`/api/expert-stories/${id}`, expertStory);
  return response.data;
};

export const getExpertStoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/expert-stories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExpertStoryById = async (id: string) => {
  const response = await axios.delete(`/api/expert-stories/${id}`);
  return response.data;
};
