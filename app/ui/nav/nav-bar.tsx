import React from "react";
import data from "../../data/nav.json";
import NavItem from "./nav-item";
import Image from "next/image";

export default function NavBar() {
  const mid = Math.ceil(data.length / 2);
  const leftItems = data.slice(0, mid);
  const rightItems = data.slice(mid);
  return (
    <nav className="fixed flex justify-center z-1 h-20 w-dvw bg-black/20 font-[family-name:var(--font-turret-road)] backdrop-blur-lg">
      <div className="flex w-full items-center max-w-[1440px]">
        <div className="flex flex-2 items- justify-between items-center h-full">
          {leftItems.map((item, index) => {
            return <NavItem key={index} title={item.title} href={item.href} />;
          })}
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src={"/logo.png"}
            alt="MPG Logo"
            width={64}
            height={43.5}
            className="min-w-[64px]"
          />
        </div>

        <div className="flex flex-2 justify-between items-center h-full">
          {rightItems.map((item, index) => {
            return <NavItem key={index} title={item.title} href={item.href} />;
          })}
        </div>
      </div>
    </nav>
  );
}
