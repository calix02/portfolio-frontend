import axiosInstance from "@/axios/axios-instance";
import type { HomeType } from "@/types/home/home.type";

export const updateHomeContentApi = async (id: string, data: HomeType) => {
  const response = await axiosInstance.put(`/home/update/${id}`, data);
  return response.data;
};

export const getHomeContentApi = async () => {
  const response = await axiosInstance.get("/home/get");
  return response.data;
};

export const addHomeContentApi = async (formData : []) => {
  const  response  = await axiosInstance.post("/projects", formData, {
     headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response;
}