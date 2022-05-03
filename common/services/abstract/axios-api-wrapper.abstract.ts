import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import AxiosInterceptor, { CustomInstance } from '../interceptors/rest-api/axios.interceptors';

export abstract class AxiosApiWrapper {
  abstract endPoint: string;
  version: string;
  baseUrl: string;
  axios: CustomInstance;

  constructor(
  ) {
    this.baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? process.env.NEXT_PUBLIC_DOMAIN : '';
    this.axios = AxiosInterceptor.getAxiosInstance();
    this.version = 'api';
  }

  get<T>(config?: AxiosRequestConfig):Promise<T>  {
    return this.axios.get<T>(`${this.baseUrl}/${this.version}/${this.endPoint}`, config);
  }

  post<T>(data: any, config?: AxiosRequestConfig):Promise<T> {
    return this.axios.post<T>(`${this.baseUrl}/${this.version}/${this.endPoint}`, data, config);
  }

  put<T>(data: object, config?: AxiosRequestConfig):Promise<T> {
    return this.axios.put(`${this.baseUrl}/${this.version}/${this.endPoint}`, data, config);
  }

  patch<T>(data: object, config?: AxiosRequestConfig):Promise<T> {
    return this.axios.patch(`${this.baseUrl}/${this.version}/${this.endPoint}`, data, config);
  }

  delete<T>(config?: AxiosRequestConfig):Promise<T> {
    return this.axios.delete(`${this.baseUrl}/${this.version}/${this.endPoint}`, config);
  }
}
