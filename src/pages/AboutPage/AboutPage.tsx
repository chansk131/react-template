import React from "react";
import useUser from "../../services/user-hook";

const AboutPage: React.FC = () => {
  const { userInfo } = useUser();
  return (
    <div>
      About
      <div>{JSON.stringify(userInfo)}</div>
    </div>
  );
};

export default AboutPage;
