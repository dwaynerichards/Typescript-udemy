import React from "react";
interface AppProps {
  color: string;
}

export default class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };
  onIncrement = (): void => {
    console.log("++");
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onIncrement}>Increment</button>
        </div>
        {this.state.counter}
        <div>
          <button onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}
