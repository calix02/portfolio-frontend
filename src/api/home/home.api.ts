import axiosInstance from "@/axios/axios-instance";
import type { HomeType } from "@/types/home/home.type";

export const updateApi = async (data: Partial<HomeType>) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};

export const getHomeContentApi = async () => {
  const response = await axiosInstance.get("/home/get");
  return response.data;
};
