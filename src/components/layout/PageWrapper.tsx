import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";
import Alert from "../Alert";
// import Footer from './Footer'

type PageWrapperProp = {
  children: React.ReactNode;
};

const Main = styled.main`
  margin-top: 56px;
`;

const PageWrapper: React.FC<PageWrapperProp> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children}
        <Alert />
      </Main>
      {/* <Footer /> */}
    </>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
