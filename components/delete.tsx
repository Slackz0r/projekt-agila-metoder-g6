"use client";

import type { Product } from "../types/types";

const API_URL = "http://localhost:4000";

// read only controlled by parents 
// delete component expects 3 arguments
type Props = {
  id: number;
  onDelete: (id: number) => void;
  onClose: () => void;
};

// detstructuring so props args are in the function call
export default function Delete({ id, onDelete, onClose }: Props) {
  async function handleDelete() {
    await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });
    // tells parent that something is deleted with id
    onDelete(id); 
  }

  return (
    <div className="mt-6 p-4 border rounded bg-blue-50">
      <h2 className="text-lg font-bold mb-4 text-blue-600">
        Delete Product
      </h2>

      <p className="mb-4">Are you sure you want to delete ID {id}?</p>

      <div className="flex gap-2">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Confirm
        </button>

        <button
	// tells parent close me
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
