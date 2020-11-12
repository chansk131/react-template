/** @format */

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";
import alertState from "../components/Alert/alertState";
import { IUser } from "./user.types";

interface IUserHook {
  userInfo: IUser | null;
}

function useUser(): IUserHook {
  const { data, error } = useSWR("/user-info");
  const setAlertState = useSetRecoilState(alertState);
  const userInfo = {
    username: data?.username,
  };

  useEffect(() => {
    if (error) {
      setAlertState({ message: error.message, type: "error" });
    }
  }, [error]);
  // const userInfo: IUser = { username: "chan" };
  return { userInfo };
}

export default useUser;
