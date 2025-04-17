import Link from "next/link";
import React from "react";

type NavItemProps = {
  title?: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function NavItem({ title = "", href = "/" }: NavItemProps) {
  return (
    <Link
      className="text-white whitespace-nowrap text-lg flex justify-center items-center pr-4 pl-4 pt-2 pb-2"
      href={href}
    >
      {title?.toUpperCase()}
    </Link>
  );
}
