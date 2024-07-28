import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";
import { Youtube, Instagram, Twitter, Facebook } from "../icons";

const PublicFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 py-6 border mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-2">
            <img src={LogoImage} alt="logo image" className="h-14" />
            <p className="mt-8 text-sm">
              Plaza BPJAMSOSTEK Lantai 19, Jl. H.R. Rasuna Said Kav. 112 Blok B,
              Kuningan, Kec. Setiabudi, Jakarta Selatan 12910
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <ul className="mt-4 text-sm">
              <li>1 Lorem ipsum dolor sit amet.</li>
              <li>2 Lorem ipsum dolor sit.</li>
              <li>3 Lorem ipsum dolor sit amet consectetur.</li>
              <li>4 Lorem ipsum dolor sit amet.</li>
              <li>5 Lorem, ipsum dolor.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Fitur dan Aplikasi</h3>
            <ul className="mt-4 text-sm">
              <li>1 Lorem ipsum dolor sit amet.</li>
              <li>2 Lorem ipsum dolor sit.</li>
              <li>3 Lorem ipsum dolor sit amet consectetur.</li>
              <li>4 Lorem ipsum dolor sit amet.</li>
              <li>5 Lorem, ipsum dolor.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Ikuti Kami</h3>
            <div className="pt-4 flex  items-center justify-between">
              <Facebook />
              <Twitter />
              <Instagram />
              <Youtube />
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-sm font-light pt-8">
          <span>Hak cipta penuh dan lisensi © {year}. </span>
          <Link to="/" className="hover:text-red-700 hover:font-normal">
            PT. Nirvana Sadya Mada
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
