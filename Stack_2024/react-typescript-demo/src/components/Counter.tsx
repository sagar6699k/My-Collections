import React from "react";
import CustomButton from "./CustomButton";

interface counterProps {
  label: string;
  count?: number;
  increament?: () => void;
  decreament?: () => void;
  
}

const Counter: React.FC<counterProps> = (props) => {
  const { label, count, increament, decreament } = props;
  return (
    <div>
      <p>
        <b>{label} : </b> {count}
      </p>
      <CustomButton
        disabled={count === 0 && true}
        label="Decreament"
        handleClick={decreament}
      />
      &nbsp;&nbsp;
      <CustomButton label="Increament" handleClick={increament} />
    </div>
  );
};

export default Counter;
