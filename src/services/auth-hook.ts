/** @format */

import { useCallback, useState } from "react";
import {
  useRecoilState,
  atom,
  SetterOrUpdater,
  useSetRecoilState,
} from "recoil";
import alertState from "../components/Alert/alertState";
import axios, { setAxiosHeaderAuthorization } from "./axios";
import { IUser } from "./user.types";

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

  const login = useCallback(
    async ({ username, password }: IUser): Promise<void> => {
      try {
        await axios.post("/login", { username, password });
      } catch (e) {
        setAlertState({ message: `Login: ${e.message}`, type: "error" });
      }
    },
    [setAlertState]
  );

  const logout = useCallback(async (): Promise<void> => {
    try {
      await axios.get("/logout");
      setAxiosHeaderAuthorization();
      setUser(null);
    } catch (e) {
      setAlertState({ message: `Logout: ${e.message}`, type: "error" });
    }
  }, [setAlertState, setUser]);

  const refresh = useCallback(async (): Promise<void> => {
    setIsChecking(true);
    try {
      const resp = await axios.get("refresh", { withCredentials: true });
      setAxiosHeaderAuthorization(resp.data.accessToken);
    } catch (e) {
      if (e?.response?.status !== 401) {
        setAlertState({ message: `Refresh: ${e.message}`, type: "error" });
      }
    } finally {
      setIsChecking(false);
    }
  }, [setAlertState]);

  return {
    user,
    isChecking,
    setUser,
    login,
    logout,
    refresh,
    // isAuthenticated: true,
    isAuthenticated: user ?? isChecking,
  };
}

export default useAuth;
