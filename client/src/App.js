import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import axios from "axios";

const url = "http://localhost:5000";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setCount(res.data.count);
    });
  }, []);

  const onClick = (num) => {
    axios
      .post(url, {
        change: num,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
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
