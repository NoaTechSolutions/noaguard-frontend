import axios from "../utils/axiosInstance";

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  active: boolean;
};

export const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>("/users");
  return response.data;
};
