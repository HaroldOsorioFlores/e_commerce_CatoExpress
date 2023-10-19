import React from "react";

const LoginWindow = () => {
  return (
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
  );
};

export default LoginWindow;
