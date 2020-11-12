import React from "react";
import styled from "styled-components";
import Layout, { Content } from "antd/lib/layout/layout";
import Alert from "../Alert";
import Header from "./Header";
import Sider from "./Sider";
// import Footer from './Footer'

const StyledLayout = styled(Layout)`
  height: 100vh;
  margin-top: 56px;
`;

type PageWrapperProp = {
  hasSider?: boolean;
};

const PageWrapper: React.FC<PageWrapperProp> = ({ children, hasSider }) => {
  return (
    <StyledLayout>
      <Header />
      <Layout>
        {hasSider && <Sider />}
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
            <Alert />
          </Content>
        </Layout>
      </Layout>
    </StyledLayout>
  );
};

export default PageWrapper;
