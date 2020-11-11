import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSetRecoilState } from "recoil";
import PageWrapper from "../../components/layout/PageWrapper";
import alertState from "../../components/Alert/alertState";

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

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const setAlertState = useSetRecoilState(alertState);
  const handleClick = (): void => {
    setAlertState({
      show: true,
      message: "Alert!",
    });
  };

  return (
    <PageWrapper>
      <Root>
        <h1>{t("Login")}</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <LoginButton type="primary" htmlType="submit">
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
