import React from "react";

interface Props {
  buttonText: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

const Button = ({ buttonText, onClick, color }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
