import React from "react";
import ItemNavHeader from "./PublicItemNavHeader";
import LogoImage from "../../assets/logo.svg";

const PublicHeader: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 p-4 shadow mb-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={LogoImage} alt="icon-home" className="h-10" />
        </div>

        <nav className="flex-1">
          <ul className="flex justify-center space-x-8 text-gray-700 hover:text-gray-900 font-medium">
            <ItemNavHeader to="/service" title="Layanan" />
            <ItemNavHeader to="/portfolio" title="Portfolio" />
            <ItemNavHeader to="/product" title="Produk" />
            <ItemNavHeader to="/client" title="Klien Kami" />
            <ItemNavHeader to="/contact" title="Hubungi Kami" />
          </ul>
        </nav>

        <button
          type="button"
          className="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mx-auto"
        >
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full"> */}
          Masuk
        </button>
      </div>
    </header>
  );
};

export default PublicHeader;
