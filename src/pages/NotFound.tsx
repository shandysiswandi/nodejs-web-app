import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/not-found.svg";
import PublicLayout from "../components/layouts/PublicLayout";

const NotFound: React.FC = () => {
  return (
    <PublicLayout>
      <div className="flex items-center justify-center mt-16 bg-white">
        <div className="text-center text-gray-600">
          <img src={NotFoundImage} alt="Not Found" className="mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Oops, halaman tidak ada!</h1>
          <p className="mb-4">Halaman yang Anda tuju tidak ditemukan</p>

          <Link to="/">
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2">Kembali</span>
            </button>
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
};

export default NotFound;
