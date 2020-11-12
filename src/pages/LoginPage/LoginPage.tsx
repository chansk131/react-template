import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSetRecoilState } from "recoil";
import { RouteComponentProps } from "react-router-dom";
import PageWrapper from "../../components/layout/PageWrapper";
import alertState from "../../components/Alert/alertState";
import useAuth from "../../services/auth-hook";

const Root = styled.div`
  max-width: 444px;
  margin: 128px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;
const H1 = styled.h1`
  font-size: 24px;
`;

const LoginPage: React.FC<RouteComponentProps> = (props) => {
  const { t } = useTranslation();

  const { login } = useAuth();
  const [user, setUser] = useState({ username: "", password: "" });

  const setAlertState = useSetRecoilState(alertState);
  const handleClick = (): void => {
    setAlertState({
      message: "Alert!",
      type: "error",
    });
  };

  const handleChange = (name: string, val: string): void => {
    setUser((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleLogin = async () => {
    await login({ username: user.username, password: user.password });
    // props.history.push("/about");
  };

  return (
    <PageWrapper>
      <Root>
        <H1>{t("Login")}</H1>
        <Form name="basic" initialValues={{ remember: true }}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <LoginButton type="primary" htmlType="submit" onClick={handleLogin}>
              Submit
            </LoginButton>
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              danger
              htmlType="button"
              onClick={handleClick}
            >
              Alert
            </Button>
          </Form.Item>
        </Form>
      </Root>
    </PageWrapper>
  );
};

export default LoginPage;
