import { useCallback, useState } from "react";

const Callback = () => {
  // Memoized callback is returned
  // 함수를 메모이제이션 하기위해서 사용하는 훅이다.

  const [hi, setHi] = useState(0);
  const [bye, setBye] = useState(0);

  const hiClickHandler = useCallback(() => {
    // 함수 내용 다시 연산하는 경우 두번째 매개변수에 의존 배열
    setHi(hi + 1);
  }, [hi]);

  const byeClickHandler = useCallback(() => {
    // 함수 내용 다시 연산하는 경우 두번째 매개변수에 의존 배열
    setHi(bye + 1);
  }, [bye]);

  return (
    <div>
      <div>
        <span>{hi}</span>
        <button onClick={hiClickHandler}></button>
      </div>
      <div>
        <span>{bye}</span>
        <button onClick={byeClickHandler}></button>
      </div>
    </div>
  );
};

export default Callback;
