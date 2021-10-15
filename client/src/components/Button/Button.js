import "./Button.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Button = ({ type, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick(type == "up" ? 1 : -1);
      }}
      style={{ backgroundColor: type == "up" ? "#6a7045" : "#b71a3b" }}
    >
      {type == "up" ? <IoIosArrowUp size={50} /> : <IoIosArrowDown size={50} />}
      {type == "up" ? "Increment" : "Decrement"}
    </button>
  );
};

export default Button;
