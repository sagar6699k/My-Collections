import React from "react";
interface buttonProps {
  label: string;
  handleClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<buttonProps> = (props) => {
  const { label, handleClick, disabled } = props;
  return (
    <button disabled={disabled} onClick={handleClick}>
      {label}
    </button>
  );
};

export default CustomButton;
