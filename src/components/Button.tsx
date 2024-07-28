import React from "react";
import { ButtonProps } from "../types/components";

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
  >
    {children}
  </button>
);

export default Button;
