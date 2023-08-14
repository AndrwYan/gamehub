import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';

import APIClient, {
  FetchResponse,
} from '../services/api-dev-client';

import Developer from '../entities/Developer';
import useDeveloperStore from '../developerStore';

const apiClient = new APIClient<Developer>('');

const useDevelopers = () => {  
  // 状态变更的时候都需要调用状态
  const developerQuery = useDeveloperStore((s) => s.developerQuery);

  return useInfiniteQuery<FetchResponse<Developer>, Error>({
    queryKey: ['developers', developerQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getDevelopersAll({
        params: {
          search: developerQuery.searchText,
       },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useDevelopers;
