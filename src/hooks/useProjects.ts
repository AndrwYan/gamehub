import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';

import APIClient, {
  FetchResponse,
} from '../services/api-dev-client';

import useDeveloperStore from '../developerStore';
import Project from '../entities/Project';

const apiClient = new APIClient<Project>('/projects');
const useProjects = () => {  
  // 状态变更的时候都需要调用状态
  const projectQuery = useDeveloperStore((s) => s.developerQuery);
  
  return useInfiniteQuery<FetchResponse<Project>, Error>({
    queryKey: ['projects', projectQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getDevelopersAll({
        params: {
          search: projectQuery.searchText,
       },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useProjects;
