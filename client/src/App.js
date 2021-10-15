import React, { useState } from "react";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import FlipNumbers from "react-flip-numbers";

const App = () => {
  const [count, setCount] = useState(200);

  console.log(count);

  const onClick = (num) => {
    console.log("in on click");
    setCount(count + num);
  };

  return (
    <>
      <Button type='down' onClick={onClick}></Button>
      <Counter count={count} />
      <Button type='up' onClick={onClick}></Button>
    </>
  );
};

export default App;
