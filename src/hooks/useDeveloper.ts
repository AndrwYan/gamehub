import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-dev-client';
import Profile from '../entities/Profile';

const apiClient = new APIClient<Profile>('/profile');

const useDeveloper = (slug: string) =>
  useQuery({
    queryKey: ['developer', slug],
    queryFn: () => apiClient.getDeveloper(slug),
  });

export default useDeveloper;
