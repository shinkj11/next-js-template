import { AxiosError } from "axios";

export default function AxiosRequestError(error: AxiosError): Promise<AxiosError>{
    return Promise.reject(error); 
}