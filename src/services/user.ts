/** @format */

import { AxiosResponse } from "axios";
import axios from "./axios";

export type User = {
  id: number;
  name: string;
};

type UserResponse = {
  id: number;
  name: string;
};

const userService = {
  getUser: async (): Promise<User> => {
    const { data }: AxiosResponse<UserResponse> = await axios.get<
      UserResponse,
      AxiosResponse<UserResponse>
    >("/");
    const result: User = {
      id: data.id,
      name: data.name,
    };
    return result;
  },
};

export default userService;
