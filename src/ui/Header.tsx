"use client";
import { cn } from "cn";
import { DataHeader } from "../data/HeaderData";
import Icon from "../components/ui/Icon";
import { ThemeToggle } from "../components/ui/ToogleTheme";
import { useState } from "react";
import Card from "../components/ui/Card";
import Image from "../components/ui/Image";
import profile from "@/src/assets/profile.jpg";
import Badge from "../components/ui/Badge";
import Link from "next/link";

interface MenuItemsProps {
  menuItems: Array<{ icon: string; text: string; href: string }>;
  onClose?: () => void;
}

interface StackItemsProps {
  stack?: Array<string>;
}

function MenuOptions({ menuItems, onClose }: MenuItemsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {menuItems?.map((item) => (
        <Link
          href={item.href}
          key={item.text}
          onClick={onClose}
          className="flex items-center justify-center md:border-none border-y first:border-t-0 border-b-0 last:border-b pt-2 md:py-0 last:pb-2 md:last:pb-0 focus:text-pink-500 hover:text-pink-300"
        >
          <div className="flex items-center border-solid bortder-2">
            <Icon IconName={item.icon} variant="outlined" />
            <span>{item.text}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Stack({ stack }: StackItemsProps) {
  return (
    <div className="flex flex-row gap-4 md:gap-1">
      {stack?.map((option) => (
        <Badge key={option} size="sm" className="md:border-0 md:p-0">
          {option}
        </Badge>
      ))}
    </div>
  );
}

interface MobileMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

function MobileMenuContent({
  isOpen,
  onClose,
  className,
}: MobileMenuContentProps) {
  const { stack, charge, menuItems } = DataHeader;

  return (
    <div
      className={cn(
        "absolute top-full left-0 w-full h-[calc(100vh-100%)] z-50 border-solid border-t border-t-pink-500 dark:border-t-pink-200",
        "bg-white dark:bg-slate-950 transition-all duration-200 ease-in-out",
        className,
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none",
      )}
    >
      <div className="flex flex-col p-6 space-y-4">
        <Card.Root>
          <Card.Header className="flex flex-col justify-center items-center py-4">
            <Image
              src={profile}
              alt="Mabel"
              className="rounded-2xl max-w-40 h-40"
            />
            <span>{charge}</span>
          </Card.Header>
          <Card.Description className="flex gap-4 pb-4 items-center justify-center">
            <Stack stack={stack} />
          </Card.Description>
        </Card.Root>
        <MenuOptions menuItems={menuItems} onClose={onClose} />
      </div>
    </div>
  );
}

export function Header() {
  const { name, stack, charge, menuItems } = DataHeader;
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <header className="relative shadow-md/30 flex dark:shadow-pink-500 shadow-pink-300 px-4 py-3 bg-white dark:bg-slate-950 z-40">
      <div className="flex justify-between items-center w-full gap-4">
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <Icon
            IconName={openMenuMobile ? "close" : "menu"}
            size="sm"
            variant="outlined"
          />
        </div>
        <div className="flex gap-4 items-center justify-between  w-full">
          <div className="flex items-center gap-4">
            <Image
              src={profile}
              alt="Mabel"
              className="rounded-2xl max-w-20 h-20 hidden md:block"
            />
            <div className="flex flex-col gap-1">
              <span className="text-center md:text-start">{name}</span>
              <Badge size="sm" className="hidden md:block">{charge}</Badge>
              <div className="hidden md:block">
                <Stack stack={stack} />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <MenuOptions menuItems={menuItems} />
          </div>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>

      <MobileMenuContent
        isOpen={openMenuMobile}
        onClose={() => setOpenMenuMobile(false)}
        className="md:hidden"
      />
    </header>
  );
}

export default Header;
