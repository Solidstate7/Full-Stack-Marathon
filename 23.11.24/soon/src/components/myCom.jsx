// Class-based Components

import { Component } from "react";

export default class Mycom extends Component {
  // e.g. Confirm / Cancel buttons: content-wise -> props (state-wise -> states)

  componentDidMount() {
    console.log("Created");
  }

  componentDidUpdate() {
    console.log(this.props.name + "but re-rendered");
  }

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      name: "",
    };
    console.log(props);
  }

  render() {
    return (
      <>
        <div className="mybtn">{this.props.name}</div>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              ...prevState,
              num: prevState.num + 1,
            }));
          }}
        >
          Count up
        </button>
      </>
    );
  }
}

class Mycom2 extends Component {
  render() {
    return <div>I'm a MyCom2</div>;
  }
}
