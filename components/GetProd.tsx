"use client";

import Delete from "./delete";
import { useState } from "react";
import type { Product } from "../types/types";
import { SquarePen, Trash } from "lucide-react";
import Edit from "./edit";

type Props = {
  products: Product[];
};

export default function Products({ products }: Props) {
  	// current value productList etc
	// {initial value}
	// setProduct function to update it
	// selectId keeps id and it is updated with setSelectedId
	// deleteId keeps id of products to be deleted
	// products selected and deleteId keeps reccord of products
  const [productList, setProductList] = useState<Product[]>(products);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  function handleUpdate(updatedProduct: Product) {
    setProductList(prev => prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
    setSelectedId(null);
  }

  function handleDelete(id: number) {
    setProductList(prev => prev.filter(p => p.id !== id));
    setDeleteId(null);
  }

  return (
    <>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Brand</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {productList.map(product => (
              <tr
                key={product.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-4 py-3 font-medium">
                  {product.title}
                </td>

                <td className="px-4 py-3">
                  {typeof product.category === "object"
                    ? product.category?.name
                    : product.category}
                </td>

                <td className="px-4 py-3">
                  {product.brand}
                </td>

                <td className="px-4 py-3">
                  ${product.price}
                </td>

                <td className="px-4 py-3">
                  {product.stock}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-end gap-3">
                    <SquarePen
                      size={16}
                      className="cursor-pointer text-blue-600 hover:text-blue-800"
                      onClick={() => setSelectedId(product.id)}
                    />

                    <Trash
                      size={16}
                      className="cursor-pointer text-red-600 hover:text-red-800"
                      onClick={() => setDeleteId(product.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(selectedId || deleteId) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => {
              setSelectedId(null);
              setDeleteId(null);
            }}
          />

          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 z-10">
            
            {selectedId && (
              <Edit
                id={selectedId}
                onSave={handleUpdate}
                onClose={() => setSelectedId(null)}
              />
            )}

            {deleteId && (
              <Delete
                id={deleteId}
                onDelete={handleDelete}
                onClose={() => setDeleteId(null)}
              />
            )}

          </div>
        </div>
      )}

    </>
  );
}
