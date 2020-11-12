/** @format */

import { useState } from "react";
import {
  useRecoilState,
  atom,
  SetterOrUpdater,
  useSetRecoilState,
} from "recoil";
import alertState from "../components/Alert/alertState";
import axios from "./axios";

export interface IUser {
  username: string;
  password?: string;
}

const userState = atom<IUser | null>({
  key: "user",
  default: null,
});

interface IUseAuth {
  isChecking: boolean;
  user: IUser | null;
  setUser: SetterOrUpdater<IUser | null>;
  login: ({ username, password }: IUser) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  isAuthenticated: IUser | boolean | null;
}

function useAuth(): IUseAuth {
  const [user, setUser] = useRecoilState(userState);
  const setAlertState = useSetRecoilState(alertState);
  const [isChecking, setIsChecking] = useState(false);

  const login = async ({ username, password }: IUser): Promise<void> => {
    try {
      const resp = await axios.post("/login", { username, password });
      setUser({ username: resp.data.username });
    } catch (e) {
      setAlertState({ message: `Login: ${e.message}`, type: "error" });
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await axios.get("/logout");
      setUser(null);
    } catch (e) {
      setAlertState({ message: `Logout: ${e.message}`, type: "error" });
    }
  };

  const refresh = async (): Promise<void> => {
    setIsChecking(true);
    try {
      await axios.get("refresh");
    } catch (e) {
      if (e?.response?.status !== 401) {
        setAlertState({ message: `Refresh: ${e.message}`, type: "error" });
      }
    } finally {
      setIsChecking(false);
    }
  };

  return {
    user,
    isChecking,
    setUser,
    login,
    logout,
    refresh,
    isAuthenticated: user ?? isChecking,
  };
}

export default useAuth;
