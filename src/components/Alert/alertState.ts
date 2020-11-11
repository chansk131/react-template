/** @format */

import { atom } from "recoil";

interface IAlert {
  show: boolean;
  message: string;
  type?: "info" | "success" | "warning" | "error" | undefined;
}

const alertState = atom<IAlert>({
  key: "alert",
  default: {
    show: false,
    message: "",
  },
});

export default alertState;
