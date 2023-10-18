import Button from "@/components/common/Button/Button";
import Link from "next/link";
import Logo from '@/components/common/Logo/Logo';
import Search from "@/components/common/Search/Search";

const data = [{name: "Servicios", label: "/"}, {name: "Nosotros", label: "/About"},{name: "Contactenos", label: "/"}];
const Navbar = () => {
  return <div className="sticky top-0 flex justify-center gap-3 px-32 h-12 bg-green-600 z-50"><div className="flex items-center justify-between h-full w-full space-x-4 text-white"><Logo href="/"/>{data.map((item)=>( <Link className="" href={item.label}>{item.name}</Link> ))}<div><Search /></div></div></div>
};

export default Navbar;
