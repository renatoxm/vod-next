import { homeQuery } from '@/const/queries';
import { useQuery } from '@tanstack/react-query';

export const useVideoCollection = (query = homeQuery) => {
  return useQuery(query);
};
