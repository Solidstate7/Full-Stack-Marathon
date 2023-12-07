import React from "react";

const LoginLabel = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default LoginLabel;
