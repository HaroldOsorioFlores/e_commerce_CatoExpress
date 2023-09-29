import Button from "@/components/common/Button/Button";
import Link from "next/link";

const data = [{name: "About", label: "/About"},{name: "Home", label: "/"}];
const Navbar = () => {
  return <div className="flex gap-3">{data.map((item)=>( <Link className="" href={item.label}>{item.name}</Link> ))}</div>
};

export default Navbar;
