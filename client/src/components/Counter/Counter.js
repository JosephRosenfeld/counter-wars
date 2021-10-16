import FlipNumbers from "react-flip-numbers";
import "./Counter.css";

const Counter = ({ count }) => {
  return (
    <div className={count < 0 ? "negCounter" : "counter"}>
      <FlipNumbers
        height={50}
        width={50}
        color='#fff'
        background='#333333'
        play
        duration={0.6}
        numbers={count < 0 ? `−${count * -1}` : `${count}`}
      />
    </div>
  );
};

export default Counter;
