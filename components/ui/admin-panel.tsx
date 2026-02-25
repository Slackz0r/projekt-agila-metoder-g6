"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { Boxes } from "lucide-react";
import { ChartLine } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Users } from "lucide-react";
import { Settings } from "lucide-react";

//used simple copy/paste icons for now. Switch to lucide react or similar in future
const menuItems = [
  { href: "/", label: "Products", icon: <Boxes /> },
  { href: "/analytics", label: "Analytics", icon: <ChartLine /> },
  { href: "/orders", label: "Orders", icon: <ShoppingCart /> },
  { href: "/customers", label: "Customers", icon: <Users /> },
  { href: "/settings", label: "Settings", icon: <Settings /> },
];

//created ActiveUser to have some bullshit mock data instead of plain text inside HTML
//data inside the bottom section (img, name, email) should be mapped to the active user
//************************************************ */
type ActiveUser = {
  image: string;
  name: string;
  email: string;
};

const activeUser: ActiveUser = {
  image: "https://www.loremfaces.net/96/id/2.jpg",
  name: "Carl Bildt",
  email: "c_bildt_3000@yahoo.com",
};
//************************************************* */

export default function AdminPanel() {
  const pathname = usePathname();

  return (
    <aside className="grid-rows-8 grid w-70 h-screen sticky top-0 border-neutral-300 border">
      <section className="border-b py-2 px-4 border-neutral-300 flex flex-col justify-center">
        <span className="text-2xl font-bold">Webbutiken</span>
        <h3 className="text-sm text-neutral-500">Admin Panel</h3>
      </section>

      <nav className="row-span-6 mx-auto w-full px-4 h-full py-4 justify-between">
        <ul className="gap-1 flex flex-col">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li
                className={`p-2 my-2 rounded-lg w-full transition-colors ${
                  isActive ? "bg-fuchsia-950 text-white" : "hover:bg-gray-200"
                }`}
                key={item.href}
              >
                <Link href={item.href}>
                  <div className="flex w-full">
                    <p className="mr-4">{item.icon}</p>
                    <p>{item.label}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="px-4 justify-center py-2 flex w-full text-ellipsis overflow-hidden whitespace-nowrap items-center place-self-end-safe border-t border-neutral-300">
        <Image
          className="rounded-full object-cover object-center"
          src={activeUser.image}
          width={50}
          height={50}
          alt="profile picture"
        />
        <div className="px-2">
          <span className="font-medium ">{activeUser.name}</span> <br />
          <span className="text-sm text-neutral-500">{activeUser.email}</span>
        </div>
      </section>
    </aside>
  );
}
