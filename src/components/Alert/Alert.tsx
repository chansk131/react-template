import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { Alert as AntdAlert } from "antd";
import { useRecoilState } from "recoil";
import alertState from "./alertState";

const StyledAlert = styled(AntdAlert)`
  &.ant-alert.ant-alert-closable {
    padding-right: 30px;
    position: absolute;
    bottom: 100px;
    left: 20%;
    right: 20%;
  }
`;

const AUTO_HIDE_TIME = 2000;
const Alert: React.FC = () => {
  const timerAutoHide = useRef(0);
  const [alert, setAlert] = useRecoilState(alertState);

  const handleClose = useCallback(() => {
    setAlert({
      show: false,
      message: "",
    });
  }, [setAlert]);

  useEffect(() => {
    if (alert.show) {
      timerAutoHide.current = setTimeout(() => handleClose(), AUTO_HIDE_TIME);
    }

    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [alert.show, handleClose]);

  if (!alert.show) return null;

  return (
    <StyledAlert
      message={alert.message}
      type={alert.type}
      showIcon
      closable
      onClose={handleClose}
    />
  );
};

export default Alert;
