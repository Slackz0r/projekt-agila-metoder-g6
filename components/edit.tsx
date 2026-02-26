"use client";

import { useEffect, useState } from "react";
import type { Product } from "../types/types";

const API_URL = "http://localhost:4000";

type Props = {
  id: number;
  onSave: (updated: Product) => void;
  onClose: () => void;
};

export default function Edit({ id, onSave, onClose }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`).then(res => res.json()).then(data => {
        setProduct(data);
        setTitle(data.title);
        setPrice(data.price);
      });
  }, [id]);

  async function handleSave() {
    const updated = {
      ...product!,
      title,
      price,
    };

    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    const savedProduct = await res.json();

    onSave(savedProduct); 
  }

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Edit Product</h2>

      <input className="border p-2 mb-3 w-full" value={title} onChange={(e) => setTitle(e.target.value)}/>

      <input type="number" className="border p-2 mb-3 w-full" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>

      <div className="flex gap-2">
        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>

        <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
}
