import React from "react";
import { Link } from "react-router-dom";

export interface ItemNavHeaderProps {
  title: string;
  to: string;
}

const ItemNavHeader: React.FC<ItemNavHeaderProps> = ({ title, to }) => (
  <li className="text-gray-600 hover:text-red-700">
    <Link to={to}>{title}</Link>
  </li>
);

export default ItemNavHeader;
