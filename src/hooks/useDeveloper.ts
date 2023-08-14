import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-dev-client';
import Developer from '../entities/Developer';

const apiClient = new APIClient<Developer>('/profile');

const useDeveloper = (slug: string) =>
  useQuery({
    queryKey: ['developer', slug],
    queryFn: () => apiClient.getDeveloper(slug),
  });

export default useDeveloper;
