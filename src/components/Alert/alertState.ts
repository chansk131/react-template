/** @format */

import { atom } from "recoil";

const alertState = atom({
  key: "alert",
  default: {
    show: false,
    message: "",
  },
});

export default alertState;
