import React from "react";
import { InputProps } from "../types/components";

const InputWithLabel: React.FC<InputProps> = ({
  id,
  type,
  value,
  onChange,
  placeholder,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 text" htmlFor={id}>
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-black placeholder-opacity-30"
      placeholder={placeholder}
    />
  </div>
);

export default InputWithLabel;
