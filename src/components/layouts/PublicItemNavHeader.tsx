import React from "react";
import { Link } from "react-router-dom";

export interface ItemNavHeaderProps {
  title: string;
  to: string;
}

const ItemNavHeader: React.FC<ItemNavHeaderProps> = ({ title, to }) => (
  <li>
    <Link to={to}>{title}</Link>
  </li>
);

export default ItemNavHeader;
