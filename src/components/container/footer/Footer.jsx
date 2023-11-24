import React from "react";
import { Button, Image, Link } from "@nextui-org/react";

const dataShop = [
  { label: "Ceprobis", url: "/Ceprobis" },
  { label: "Panificadora Ucsm", url: "/PanificadoraUcsm" },
  { label: "Como en Casa", url: "/ComoEnCasa" },
  { label: "El Cholo", url: "/ElCholo" },
];

const Footer = () => {
  return (
    <div className="bg-zinc-800 py-14 px-14 md:px-48">
      <hr className="border-t-2 border-gray-600" />
      <div className="flex flex-col md:flex-row w-full text-slate-50 text-tiny my-10">
        <div className="flex flex-col sm:flex-row w-full md:w-1/2 space-y-10 sm:space-y-0 px-5 sm:px-0">
          <div className="flex-col space-y-1.5 px-6 w-full sm:w-2/5">
            <Image
              className="rounded-none"
              src="/images/logo_catoexpress_black.png"
            ></Image>
          </div>
          <div className="flex-col text-center sm:text-left space-y-2 w-full sm:w-1/3">
            <p className="font-bold text-base mb-8">Servicios</p>
            {dataShop.map((item, index) => (
              <p>
                <Link
                  className="text-sm text-slate-50 font-normal"
                  href={item.url}
                >
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-2 w-full sm:w-1/3">
  <p className="font-bold text-base mb-8 text-center">
    Libro de reclamaciones
  </p>
  <Image
    className="rounded-none"
    src="/images/libro_reclamaciones.png"
  ></Image>
</div>
        </div>
        <div className="flex mt-10 md:mt-0 w-full md:w-1/2 justify-center md:justify-normal">
          <div className="w-0 md:w-1/3 h-full"></div>
          <div className="flex-col space-y-4 w-3/5">
            <p className="text-3xl text-center font-thin">Catoexpress</p>
            <div className="flex justify-center space-x-2 text-center">
              <svg
                className="h-4 w-4 text-slate-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <svg
                className="h-4 w-4 text-slate-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                className="h-4 w-4 text-slate-50"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
              </svg>
            </div>
            <div className="text-neutral-300 flex justify-between space-x-3 pt-8">
              <div className="relative w-full bg-transparent border border-white h-10 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 absolute left-3 top-2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                <input
                  type="search"
                  placeholder="Buscar..."
                  className="pl-10 bg-transparent w-full h-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-600" />
    </div>
  );
};

export default Footer;
