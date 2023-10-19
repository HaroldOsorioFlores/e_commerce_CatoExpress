import React from "react";
import LoginWindow from "@/components/common/Login/LoginWindow";
import Link from "next/link";

const Login = () => {
  return (
    <div  >
      <Link href="/Login">
        <button className="bg-green-800 rounded-lg text-white text-sm px-4 py-2 ">
          Ingresar
        </button>
      </Link>
    </div>
  );
};

export default Login;
