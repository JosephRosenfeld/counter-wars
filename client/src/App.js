import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import FlipNumbers from "react-flip-numbers";

const App = () => {
  return (
    <>
      <Button type='down'></Button>
      <Counter />
      <Button type='up'></Button>
    </>
  );
};

export default App;
