// use 접두어 사용으로 hook이라는 것을 인지, 가독성 향상
import { useState } from "react";

const useInput = (initialValue) => {
  // regex -> violated alert
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  // why value, onChange?
  // can be injected as the attributes of input element
  return { value, onChange };
};

export default useInput;
