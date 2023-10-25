import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
});

class APIClient<T> {
  endpoint: string;

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
  
  // 编辑用户资料接口
  editProfile = (id: string, formData: FormData) => {
    return axiosInstance
      .post<T>(this.endpoint + '/' + id + '/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  };

}

export default APIClient;
