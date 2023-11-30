import React from "react";
import styled from "styled-components";

// JSX Tag Function
// vscode-styled-components auto-completion
// props로 전달한 값을 템플릿 리터럴에 삽입해서 동적

const HeaderStyle = styled.div`
  font-size: 15px;
  width: 100%;
  height: 60px;
  color: blue;
`;

const Header = ({ name }) => {
  return <HeaderStyle>{name}</HeaderStyle>;
};

export default Header;
