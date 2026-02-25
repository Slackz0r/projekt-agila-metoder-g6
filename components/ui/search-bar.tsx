"use client";

import { useState } from "react";

export type StockStatus = "all" | "in_stock" | "low_stock" | "out_of_stock";

type Props = {
  onFilterChange: (filters: {
    search: string;
    category: string;
    stockStatus: StockStatus;
  }) => void;
};

export default function SearchBar({ onFilterChange }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [stockStatus, setStockStatus] = useState<StockStatus>("all");

  const handleChange = (
    newSearch = search,
    newCategory = category,
    newStockStatus = stockStatus,
  ) => {
    setSearch(newSearch);
    setCategory(newCategory);
    setStockStatus(newStockStatus);

    onFilterChange({
      search: newSearch,
      category: newCategory,
      stockStatus: newStockStatus,
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 shadow-sm rounded-lg mb-6">
      {/* search bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="border border-neutral-300 rounded-lg px-3 py-2 w-full"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />

      {/* category filter drop down */}
      <select
        className="border border-neutral-300 rounded-lg px-3 py-2 w-full md:w-1/3"
        value={category}
        onChange={(e) => handleChange(search, e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="electronics">*category 1*</option>
        <option value="clothing">*category 2*</option>
        <option value="office">*category 3*</option>
      </select>

      {/* status filter drop down */}
      <select
        className="border border-neutral-300 rounded-lg px-3 py-2 w-full md:w-1/3"
        value={stockStatus}
        onChange={(e) =>
          handleChange(search, category, e.target.value as StockStatus)
        }
      >
        <option value="all">All Status</option>
        <option value="in_stock">In Stock</option>
        <option value="low_stock">Low Stock</option>
        <option value="out_of_stock">Out of Stock</option>
      </select>
    </div>
  );
}
