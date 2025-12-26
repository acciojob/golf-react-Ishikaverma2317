import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startGame: false,
      position: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 39 && this.state.startGame) {
      this.setState((prevState) => ({
        position: prevState.position + 5,
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ startGame: true });
  };

  renderChoice = () => {
    if (!this.state.startGame) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }

    return (
      <div
        className="ball"
        style={{
          position: "relative",
          left: `${this.state.position}px`,
        }}
      ></div>
    );
  };

  render() {
    return <div className="game">{this.renderChoice()}</div>;
  }
}

export default App;
