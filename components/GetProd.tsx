import type { ProductsResponse } from "../types/types.ts";
import { Headphones } from "lucide-react";
import { Monitor } from "lucide-react";
import { Router } from "lucide-react";
import { Flashlight } from "lucide-react";
import { Piano } from "lucide-react";
import { Hammer } from "lucide-react";
import { SquarePen } from "lucide-react";
import { Trash } from "lucide-react";
import type { Product } from "../types/types.ts";
//import { addProduct } from "./addProduct.js"

const API_URL = "http://localhost:4000";
const defaultLimit = "50";

const icons = [<Headphones />, <Monitor />, <Router />, <Flashlight />, <Piano />, <Hammer />];
const status = ["In stock", "Low stock", "Out of stock"];
const stock = ["In stock", "Low stock", "Out of stock"];

export default async function Products() {
  const { products, total, page, pages, limit }: ProductsResponse = await fetch(
    `${API_URL}/products/?_limit=${defaultLimit}&_sort=id&_order=desc&_expand=category`,
  ).then((res) => res.json());

  console.log(products);

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-600 uppercase tracking-wide">
        <div className="p-3"></div>
        <div className="p-3">Product</div>
        <div className="p-3">Category</div>
        <div className="p-3">Price</div>
        <div className="p-3">Stock</div>
        <div className="p-3">Status</div>
        <div className="p-3 text-right">Action</div>
      </div>

      {products.map((product, index) => (
        <div
          key={product.id}
          className={`grid grid-cols-7 items-center border-b border-gray-100 
        ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} 
        hover:bg-blue-50 transition`}
        >
          <div className="p-3">{icons[Math.floor(Math.random() * 6)]}</div>
          <div className="p-3 font-medium text-gray-800">{product.title}</div>
          <div className="p-3 text-gray-600">{product.category?.name}</div>
          <div className="p-3">{product.price}</div>
          <div className="p-3">{Math.floor(Math.random() * 100)}</div>
          <div className="p-3">
            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-green-700">
              {status[Math.floor(Math.random() * 3)]}
            </span>
          </div>
          <div className="p-3 text-right">
            <button className="text-sm text-blue-600 hover:underline">
              <div className="flex items-center gap-2">
                <SquarePen size={16} className="text-blue-600 cursor-pointer" />
                <Trash size={16} className="text-red-600 cursor-pointer" />
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProdLen(products: any[]) {
  return products.length;
}

export function remove(products: Product[], id: number): Product | null {
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) return null;

  const deletedProduct = products.splice(index, 1)[0];

  return deletedProduct;
}

export function search(products: Product[], query: string): Product[] {
  const lowerQuery = query.toLowerCase();

  return products.filter((p) => p.title.toLowerCase().includes(lowerQuery));
}

export function edit(products: Product[], id: number): Product {
  const index = products.findIndex((p) => p.id === id);

  return product;
}

export function getById(products: Product[], id: number): Product | null {
  return products.find((p) => p.id === id) || null;
}

export function updateProduct(
  products: Product[],
  id: number,
  updates: Partial<Product>,
): Product | null {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updatedProduct = {
    ...products[index],
    ...updates,
    meta: {
      ...products[index].meta,
      updatedAt: new Date().toISOString(),
    },
  };

  products[index] = updatedProduct;

  return updatedProduct;
}

// export default function createPage() {

//	return {
//		<main>
//		   <h1>new product</h1>
//	   	      <Form action={addProduct}>
//		        <input className="border" type="text" name="query"
//	}
