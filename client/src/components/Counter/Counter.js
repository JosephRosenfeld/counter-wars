import FlipNumbers from "react-flip-numbers";
import "./Counter.css";

const Counter = ({ count }) => {
  return (
    <div className='counter'>
      <FlipNumbers
        height={50}
        width={50}
        color='#fff'
        background='#333333'
        play
        duration={0.6}
        numbers={`${count}`}
      />
    </div>
  );
};

export default Counter;
