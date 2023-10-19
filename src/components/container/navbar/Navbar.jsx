import Button from "@/components/common/Button/Button";
import Link from "next/link";
import Logo from "@/components/common/Logo/Logo";
import Search from "@/components/common/Search/Search";
import LoginButton from "@/components/common/Login/LoginButton";

const data = [
  { name: "Servicios", label: "/" },
  { name: "Nosotros", label: "/About" },
  { name: "Contactenos", label: "/" },
];
const Navbar = () => {
  return (
    <div className="bg-lime-600 sticky top-0 flex justify-center gap-3 px-32 h-12 drop-shadow-2xl">
      <div className="flex items-center justify-between h-full w-full space-x-4 text-white">
        <Link href="/">
          <Logo />
        </Link>
        {data.map((item) => (
          <Link className="" href={item.label}>
            {item.name}
          </Link>
        ))}
        <div className="flex space-x-2">
          <Search />
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
