"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="bg-zinc-800 py-14 px-48">
      <div>
        <hr className="border-t-2 border-gray-600" />
        <div className="flex w-full text-slate-50 text-tiny my-10">
          <div className="flex w-1/2">
            <div className="flex-col space-y-1.5 w-1/3">
              <p className="font-bold text-base mb-8">Company</p>
              <p>About us</p>
              <p>Team</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
            <div className="flex-col space-y-2 w-1/3">
              <p className="font-bold text-base mb-8">Contact</p>
              <p>Help & Support</p>
              <p>Partner with us</p>
              <p>Ride with us</p>
            </div>
            <div className="flex-col space-y-2 w-1/3">
              <p className="font-bold text-base mb-8">Legal</p>
              <p>Terms & Conditions</p>
              <p>Refund & Cancellation</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="w-1/3 h-full"></div>
            <div className="flex-col space-y-8 w-2/3">
              <p className="text-gray-400 font-bold text-tiny">SIGUENOS</p>
              <div className="flex space-x-2">
                <svg
                  className="h-4 w-4 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <svg
                  class="h-4 w-4 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <svg
                  class="h-4 w-4 text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                </svg>
              </div>
              <p className="text-neutral-300 font-bold text-tiny">
                Contactanos con nosotros
              </p>
              <div className="text-neutral-300 flex justify-between space-x-3">
                <div className="relative w-3/4 bg-zinc-600 h-10 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 absolute left-3 top-2.5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>

                  <input
                    type="email"
                    placeholder="Ingrese su email"
                    className="pl-10 bg-transparent w-full h-full rounded-md"
                  />
                </div>

                <Button
                  className="bg-green-800 text-white font-bold text-tiny shadow-lime-800 w-1/4"
                  radius="sm"
                  variant="shadow"
                >
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-600" />
      </div>
    </div>
  );
};

export default Footer;
