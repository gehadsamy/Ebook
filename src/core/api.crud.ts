import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance"

export const findAll = async (url: string)
    : Promise<AxiosResponse<any>> => {
    return await axiosInstance.get(url);
}

export const findOne = async (url: string, id?: string | number)
    : Promise<AxiosResponse<any>> => {
    return await axiosInstance.get(`${url}/${id}`);
}