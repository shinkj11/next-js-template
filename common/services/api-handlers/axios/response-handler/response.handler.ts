import { CustomResponseFormat } from "@/common/services/interceptors/rest-api/axios.interceptors";
import { AxiosInterceptorManager, AxiosResponse as axiosResponse } from "axios";

export default function AxiosResponse(response: axiosResponse<CustomResponseFormat>): AxiosInterceptorManager<axiosResponse<CustomResponseFormat>> {
    return response.data.data;
}