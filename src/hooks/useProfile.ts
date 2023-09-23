import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-dev-client';
import PersonalProfile from '../entities/PersonalProfile';

const apiClient = new APIClient<PersonalProfile>('/info');

const useProfile = (slug: string) =>
  useQuery({
    queryKey: ['profile', slug],
    queryFn: () => apiClient.getDeveloper(slug),
  });

export default useProfile;
