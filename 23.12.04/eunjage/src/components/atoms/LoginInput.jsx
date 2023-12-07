import useInput from "../../hooks/useInput";

const LoginInput = ({ name, type }) => {
  // input's state variables
  const uidInput = useInput("");
  return (
    <>
      {/* {uidInput.value} */}
      <input name={name} type={type} {...uidInput} />
    </>
  );
  // key-value properties, object spread, separate attributes applied
};

export default LoginInput;
