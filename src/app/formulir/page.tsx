"use client";

import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-start gap-6 py-10 px-4 flex-wrap">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4">Aplikasi Perhitungan Data</h2>

        <input
          type="text"
          placeholder="Masukan nama barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Masukan kategori barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="number"
          placeholder="Masukan harga barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="number"
          placeholder="Masukan jumlah barang"
          className="border w-full p-2 mb-4 rounded"
        />
        <button className="bg-blue-700 text-white w-full py-2 rounded mb-3">
          Hitung
        </button>
        <button className="bg-red-500 text-white w-full py-2 rounded font-semibold">
          Bersih
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4">Aplikasi Perhitungan Data</h2>

        <input
          type="text"
          placeholder="Masukan nama barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Masukan kategori barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="number"
          placeholder="Masukan harga barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="number"
          placeholder="Masukan jumlah barang"
          className="border w-full p-2 mb-4 rounded"
        />
        <button className="bg-blue-700 text-white w-full py-2 rounded mb-3">
          Hitung
        </button>
        <button className="bg-red-500 text-white w-full py-2 rounded font-semibold">
          Bersih
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 w-75 max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4">Aplikasi Perhitungan Diskon</h2>

        <input
          type="text"
          placeholder="Masukan nama barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Masukan kategori barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="number"
          placeholder="Masukan harga barang"
          className="border w-full p-2 mb-3 rounded"
        />
        <input
          type="number"
          placeholder="Masukan diskon (%)"
          className="border w-full p-2 mb-4 rounded"
        />

        <button className="bg-yellow-500 text-black w-full py-2 rounded font-semibold">
          Hitung
        </button>
      </div>
    </main>
  );
}
