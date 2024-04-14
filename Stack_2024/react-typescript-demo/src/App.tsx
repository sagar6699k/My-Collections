import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import DemoForm from "./components/DemoForm";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const handleIncreament = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  const handleDecreament = () => {
    count > 0 && setCount((prevCount: number) => prevCount - 1);
  };

  return (
    <div className="App">
      <h1>React with Typescript!</h1>
      <Counter
        label="Counter"
        count={count}
        increament={handleIncreament}
        decreament={handleDecreament}
      />
      <hr />
      <DemoForm />
    </div>
  );
}

export default App;
