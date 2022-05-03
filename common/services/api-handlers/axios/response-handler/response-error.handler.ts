import { CustomResponseFormat } from "@/common/services/interceptors/rest-api/axios.interceptors";
import { AxiosError } from "axios";

export default function AxiosResponseError(error: AxiosError<CustomResponseFormat>): Promise<CustomResponseFormat> {
    console.error(error.message);
    return Promise.reject(error.response?.data);
}