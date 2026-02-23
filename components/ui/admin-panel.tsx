import Link from "next/link";
import Image from "next/image";

//used simple copy/paste icons for now. Switch to lucide react or similar in future
const menuItems = [
  { href: "/products", label: "Products", icon: "📦" },
  { href: "/analytics", label: "Analytics", icon: "📈" },
  { href: "/orders", label: "Orders", icon: "🛒" },
  { href: "/customers", label: "Customers", icon: "👥" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
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
  name: "Göran Persson",
  email: "g.persson@sosse.se",
};
//************************************************* */

export default function AdminPanel() {
  return (
    <aside>
      <span>Webbutiken</span>
      <h3>Admin Panel</h3>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Image
          src={activeUser.image}
          width={100}
          height={100}
          alt="profile picture"
        />
        <span>{activeUser.name}</span>
        <span>{activeUser.email}</span>
      </div>
    </aside>
  );
}
