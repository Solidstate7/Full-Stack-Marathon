import { Component } from "react";
import { FunctionCom } from "../components/FunctionCom";

class Mypage extends Component {
  render() {
    return (
      <div>
        My page
        <FunctionCom name={"functional component."}></FunctionCom>
      </div>
    );
  }
}

export default Mypage;
