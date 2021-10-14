import FlipNumbers from "react-flip-numbers";
import "./Counter.css";

const Counter = () => {
  return (
    <div className='counter'>
      <FlipNumbers
        height={50}
        width={50}
        color='#fff'
        background='#333333'
        play
        numbers='12345'
      />
    </div>
  );
};

export default Counter;
