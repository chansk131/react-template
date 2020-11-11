import { AxiosError, AxiosResponse } from "axios";
import axios from "./axios";

type User = {
  id: number;
  name: string;
};

const userService = {
  getUser: async (): Promise<User | null> => {
    try {
      const { data }: AxiosResponse<User> = await axios.get("/");
      const result: User = {
        id: data.id,
        name: data.name,
      };
      return result;
    } catch (e: AxiosError | unknown) {
      return null;
    }
  },
};

export default userService;
