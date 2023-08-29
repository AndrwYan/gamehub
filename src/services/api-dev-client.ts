import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8001',
});

class APIClient<T> {
  endpoint: string;

  //接口传递的路径
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getDevelopersAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  
  getDeveloper = (id: string | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)    
      .then((res) => res.data);
  };

  login = (config: AxiosRequestConfig) => {
    return axiosInstance
      .post<T>(this.endpoint, config)
      .then((res) => res.data);
  };
  
}

export default APIClient;
