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
  image: "https://www.loremfaces.net/96/id/1.jpg",
  name: "Carl Bildt",
  email: "c_bildt_3000@yahoo.com",
};
//************************************************* */

export default function AdminPanel() {
  const pathname = usePathname();

  return (
    <aside className="px-4 w-80 h-screen sticky top-0">
      <span className="text-2xl font-bold">Webbutiken</span>
      <h3 className="text-sm text-neutral-500">Admin Panel</h3>
      <nav className="flex mx-auto flex-col h-full py-2 justify-between">
        <ul>
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

        <section className="flex text-ellipsis overflow-hidden whitespace-nowrap border-t  items-center place-self-end-safe my-4 py-4">
          <Image
            className="rounded-4xl py-2"
            src={activeUser.image}
            width={100}
            height={100}
            alt="profile picture"
          />
          <div className="px-2">
            <span className="font-medium ">{activeUser.name}</span> <br />
            <span className="text-sm text-neutral-500">{activeUser.email}</span>
          </div>
        </section>
      </nav>
    </aside>
  );
}
