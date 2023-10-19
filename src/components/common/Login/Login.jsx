"use client";

import React, { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <button className="bg-green-800 rounded-lg text-white text-sm px-4 py-2 " onClick={() => setIsOpen(true)}>Ingresar</button>

      {isOpen && (
        <div
          className="fixed inset-x-0 top-0 h-screen flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white flex w-4/6 h-4/5 items-center rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {
              <div className="p-5 w-2/5 h-4/6 rounded-lg mt-[-7%] ml-[7%] text-black flex-col space-y-3">
                <img
                  className="relative h-16 object-left"
                  src={"./images/Escudo-UCSM.png"}
                />
                <p className="text-slate-500 text-sm pt-3">Bienvenido!!</p>
                <h1 className="font-bold text-3xl pb-3">Iniciar Sesion</h1>

                <p>Email</p>
                <input
                  className="bg-rose-50 rounded pl-3 h-9 w-full"
                  placeholder="user@ucsm.edu.pe"
                />
                <div className="flex justify-between pt-1">
                  <p>Contraseña</p>
                  <p className="text-slate-500">¿Olvidaste tu Contraseña?</p>
                </div>
                <input
                  className="bg-rose-50 rounded pl-3 h-9 w-full"
                  placeholder="Contraseña"
                />
                <div className="flex justify-center py-3">
                  <button className="bg-green-700 rounded-full text-white text-sm px-4 py-2">
                    INICIAR SESION
                  </button>
                </div>

                <div className="flex justify-center space-x-1 text-sm">
                  <p className="text-slate-400">No tienes una</p>
                  <button className="text-green-600">Crear cuenta</button>
                </div>
              </div>
            }
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
      )}
    </div>
  );
};

export default Login;
