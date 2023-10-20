"use client";
import { useState } from "react";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
} from "@nextui-org/react";

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
};
const dataPages = [
  { label: "Nosotros", url: "/" },
  { label: "Contactanos", url: "/" },
];

const dataProfileActions = [{ label: "Configuracion", url: "/" }];
const dataShop = [
  { label: "Ceprobis", url: "/" },
  { label: "Panificadora", url: "/" },
  { label: "Como en Casa", url: "/" },
  { label: "El Cholo", url: "/" },
];

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUiNavbar
      isBordered
      className="bg-lime-500"
      onMenuOpenChange={setIsMenuOpen}
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
          <DropdownMenu
            aria-label="CatoExpress servicios"
            itemClasses={{
              base: "gap-8",
            }}
          >
            {dataShop.map((item, index) => (
              <DropdownItem key={index} textValue="viewShops">
                <Link className="text-sm text-black font-normal">
                  {item.label}
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

      <NavbarContent as="div" className="items-center" justify="end">
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
        <NavbarItem>
          <Button
            as={Link}
            href="/Login"
            variant="solid"
            className="bg-green-900 text-white"
          >
            Ingresar
          </Button>
        </NavbarItem>
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem textValue="viewSession" className="h-14 gap-2">
              <p className="font-semibold">Sesion</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            {dataProfileActions.map((item, index) => (
              <DropdownItem key={index}>{item.label}</DropdownItem>
            ))}
            <DropdownItem key="logout" color="danger">
              Salir
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>*/}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
};

export default Navbar;
