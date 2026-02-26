"use client";

import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { Product } from "../types/types";

const API_URL = "http://localhost:4000/products";

function highlightText(
  text: string,
  matches?: readonly [number, number][]
) {
  if (!matches || matches.length === 0) return text;

  const result: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  matches.forEach(([start, end], i) => {
    result.push(text.slice(lastIndex, start));

    result.push(
      <mark key={i} className="bg-cyan-100 px-1 rounded">
        {text.slice(start, end + 1)}
      </mark>
    );

    lastIndex = end + 1;
  });

  result.push(text.slice(lastIndex));
  return result;
}

export default function Search() {

  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Fuse.FuseResult<Product>[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(API_URL);
      const data = await res.json();
      const productArray = Array.isArray(data) ? data : data.products;

      setProducts(productArray);
    }

    load();
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(products, {
      threshold: 0.4,
      includeMatches: true,
      useExtendedSearch: true,
      keys: [
        "title",
        "description",
   //     "brand",
   //     "sku",
   //     "tags",
  //      "warrantyInformation",
  //      "shippingInformation",
  //      "availabilityStatus",
  //      "returnPolicy",
  //      "meta.barcode",
  //      "meta.qrCode",
 //       "reviews.comment",
 //       "reviews.reviewerName",
      ],
    });
  }, [products]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const searchResults = fuse.search(`'${query}`);
    setResults(searchResults);
  }, [query, fuse]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search anything..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-4 py-2 rounded w-full mb-4"
      />

      {query.trim() === "" ? (
        <p className="text-gray-400">Start typing to search...</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="space-y-3">
          {results.map((result) => {
            const product = result.item;

            const titleMatch = result.matches?.find(
              (m) => m.key === "title"
            );

            const descMatch = result.matches?.find(
              (m) => m.key === "description"
            );

            return (
              <div
                key={product.id}
                className="border p-3 rounded shadow-sm"
              >
                <h3 className="font-bold text-lg">
                  {highlightText(product.title, titleMatch?.indices)}
                </h3>

                <p className="text-sm text-gray-700">
                  {highlightText(
                    product.description,
                    descMatch?.indices
                  )}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  ${product.price}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
