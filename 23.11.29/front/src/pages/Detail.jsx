import React from "react";
import { Header, Body } from "../components";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

// react hook url
// react-router-dom hooks
// useLocation: 현재 브라우저의 URL 정보 가져온다
// useParams: url 파라미터를 객체로 파싱해서 가져온다
// useSearchParams: query string 파싱해서 매개변수 가져온다.

const Detail = (num, name) => {
  // DB
  let tempItem = [
    { num: 10, name: "Some shirt" },
    { num: 20, name: "Some pants" },
    { num: 30, name: "Some hat" },
  ];

  const location = useLocation();
  console.log(location);

  const params = useParams();
  console.log(params);

  const [query, setQuery] = useSearchParams();
  // 인스턴스가 배열의 형태로 반환된다.
  // 첫번째는 쿼리 내용 get 메서드가 존재하는 객체, 두번쨰는 set
  console.log(query.get("num2"));
  console.log(query.get("num3"));
  return (
    <div>
      <Header name="Detail Page" />
      <div>{tempItem[params.id].num}개</div>
      <div>{tempItem[params.id].name}</div>
      <Body path="/" pageName={"Main Page"} />
    </div>
  );
};

export default Detail;
