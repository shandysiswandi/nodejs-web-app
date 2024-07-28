import React from "react";
import { Link } from "react-router-dom";
import ItemNavHeader from "./PublicItemNavHeader";
import LogoImage from "../../assets/logo.svg";

const PublicHeader: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 p-4 shadow mb-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={LogoImage} alt="icon-home" className="h-10" />
        </Link>

        <nav className="flex-1">
          <ul className="flex justify-center space-x-8 font-medium">
            <ItemNavHeader to="/service" title="Layanan" />
            <ItemNavHeader to="/portfolio" title="Portfolio" />
            <ItemNavHeader to="/product" title="Produk" />
            <ItemNavHeader to="/client" title="Klien Kami" />
            <ItemNavHeader to="/contact" title="Hubungi Kami" />
          </ul>
        </nav>

        <Link to="/login">
          <button
            type="button"
            className="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mx-auto"
          >
            Masuk
          </button>
        </Link>
      </div>
    </header>
  );
};

export default PublicHeader;
