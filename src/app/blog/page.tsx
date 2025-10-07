"use client";

import React, { useEffect } from "react";
import tumbler from "./tumbler.png";
import buku from "./buku.png";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    console.log("Halaman produk dimuat");
  }, []);

  const products = Array.from({ length: 9 }, (_, index) => {
    const isBuku = index % 2 === 0;
    return {
      id: index,
      type: isBuku ? "buku" : "tumbler",
      image: isBuku ? buku : tumbler,
      title: isBuku ? "Buku Tulis" : "Tumbler Minum",
      desc: isBuku
        ? "Buku tulis berkualitas tinggi dengan kertas premium."
        : "Tumbler stainless yang menjaga suhu minuman lebih lama.",
    };
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <nav>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-gray-300">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Produk Tumbler
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Produk Buku
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pengaturan
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Katalog Produk</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition duration-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={product.type === "buku" ? 200 : 150}
                className="mx-auto"
              />
              <h2 className="mt-4 text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
