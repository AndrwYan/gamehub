import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-dev-client';
import Project from '../entities/Project';

const apiClient = new APIClient<Project>('/projects/project');

const useProject = (slug: string) =>
  useQuery({
    queryKey: ['project', slug],
    queryFn: () => apiClient.getDeveloper(slug),
  });

export default useProject;
