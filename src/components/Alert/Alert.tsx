import React from "react";
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

const Alert: React.FC = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  const handleClose = () => {
    setAlert({
      show: false,
      message: "",
    });
  };

  if (!alert.show) return null;

  return (
    <StyledAlert
      message={alert.message}
      type="error"
      showIcon
      closable
      onClose={handleClose}
    />
  );
};

export default Alert;
