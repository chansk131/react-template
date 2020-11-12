/** @format */

import { atom } from "recoil";

interface IAlert {
  message: string;
  type?: "info" | "success" | "warning" | "error" | undefined;
}

const alertState = atom<IAlert>({
  key: "alert",
  default: {
    message: "",
  },
});

export default alertState;
