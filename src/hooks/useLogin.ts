import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-dev-client';
import Token from '../entities/Token';
import { AxiosRequestConfig } from 'axios';

const apiClient = new APIClient<Token>('/login');

const useLogin = (config: AxiosRequestConfig) =>
  useQuery({
    queryKey: ['login', config],
    queryFn: () => apiClient.login(config),
  });

export default useLogin;
