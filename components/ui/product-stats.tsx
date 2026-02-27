import type { StatusProps } from "@/models/Status";
import type { Product } from "@/app/types";
import StatusCard from "./status-card";

// Fetch function
const getStats = async function () {
  const response = await fetch("http://localhost:4000/products");

  const data = await response.json();
  return data;
};

export default async function ProductStats() {
  const data = await getStats();
  const { products, total } = data;

  let inStock = 0;
  let lowStock = 0;
  let outOfStock = 0;

  products.forEach((item: Product) => {
    if (item.availabilityStatus === "In Stock") {
      inStock++;
    } else if (item.availabilityStatus === "Low Stock") {
      lowStock++;
    } else {
      outOfStock++;
    }
  });

  const cards: StatusProps[] = [
    {
      title: "Total Stock",
      amount: total,
      variant: "default",
    },
    {
      title: "In Stock",
      amount: inStock,
      variant: "success",
    },
    {
      title: "Low Stock",
      amount: lowStock,
      variant: "warning",
    },
    {
      title: "Out of Stock",
      amount: outOfStock,
      variant: "danger",
    },
  ];

  return (
    <>
      <section className="flex gap-8 my-8">
        {cards.map((card) => (
          <StatusCard key={card.title} {...card} />
        ))}
      </section>
    </>
  );
}
