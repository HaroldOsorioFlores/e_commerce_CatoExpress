"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Image,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

const dataIcon = {
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
  iconSearch: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  ),
  iconCart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
    </svg>
  ),
};
const dataPages = [
  { label: "Nosotros", url: "/About" },
  { label: "Contactanos", url: "/ContactUs" },
];

const dataShop = [
  { label: "Ceprobis", url: "/Ceprobis" },
  { label: "Panificadora Ucsm", url: "/PanificadoraUcsm" },
  { label: "Como en Casa", url: "/ComoEnCasa" },
  { label: "El Cholo", url: "/ElCholo" },
];

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartProducts } = useCartStore();
  const user = useUser();
  console.log("el usuario es del navbar: ", user);
  console.log("Los productos son: ", cartProducts);

  return (
    <NextUiNavbar
      isBordered
      className="bg-lime-500"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/images/logo_catoexpress.webp"
              alt="Logo Catoexpress"
              height={36}
              width={130}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-black font-normal"
                radius="sm"
                variant="light"
                endContent={dataIcon.icon}
              >
                Servicios
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="CatoExpress servicios">
            {dataShop.map((item, index) => (
              <DropdownItem key={index} textValue="viewShops">
                <Link
                  className="text-sm text-black font-normal"
                  href={item.url}
                >
                  <div className="w-full h-full">
                  {item.label}
                  {console.log(item.label, item.url)}</div>
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        {dataPages.map((item, index) => (
          <NavbarItem isActive key={index}>
            <Link
              href={item.url}
              aria-current="page"
              className="text-sm text-black font-normal"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" className="items-center flex gap-2" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-100/40 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
          startContent={dataIcon.iconSearch}
        />
        <NavbarItem className="flex items-center">
          <Button
            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-black font-normal flex gap-1"
            variant="light"
            onClick={() =>
              router.push(
                `/ShopCart?userName=${user.user.fullName}&userId=${user.user.id}&userEmail=${user.user.emailAddresses[0].emailAddress}`
              )
            }
          >
            {dataIcon.iconCart}({cartProducts.length})
          </Button>
        </NavbarItem>
        {user.isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              href="/sign-in"
              variant="solid"
              className="bg-green-900 text-white"
            >
              Ingresar
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {dataShop.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider />
        {dataPages.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
};

export default Navbar;
