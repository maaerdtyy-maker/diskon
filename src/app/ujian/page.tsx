import pensil from "./pensil.png";
import pulpen from "./pulpen.png";
import Image from "next/image";
import { Metadata } from "next";
import { title } from "./ujian_544241156";

export const metadata: Metadata = {
  title: title.title,
  description: title.description,
};

export default function Page() {
  const pulpenProducts = [
    {
      id: 1,
      image: pulpen,
      title: "Pulpen Hitec",
      desc: "Pulpen berkualitas tinggi dengan tinta premium.",
      price: "Rp 12.000",
    },
    {
      id: 2,
      image: pulpen,
      title: "Pulpen Gel Smooth",
      desc: "Pulpen gel dengan tinta halus untuk menulis cepat.",
      price: "Rp 15.000",
    },
  ];

  const pensilProducts = [
    {
      id: 3,
      image: pensil,
      title: "Pensil 2B",
      desc: "Pensil dengan kayu terbaik.",
      price: "Rp 8.000",
    },
    {
      id: 4,
      image: pensil,
      title: "Pensil HB",
      desc: "Pensil serbaguna untuk menulis dan menggambar.",
      price: "Rp 7.000",
    },
    {
      id: 5,
      image: pensil,
      title: "Pensil Warna",
      desc: "Pensil warna untuk seni dan kreativitas.",
      price: "Rp 25.000",
    },
  ];

  return (
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Katalog Produk</h1>

      <h2 className="text-2xl font-semibold mb-4">Produk Pulpen</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        {pulpenProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-lg p-6 bg-gradient-to-br from-white to-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow mb-4 flex items-center justify-center bg-gray-50">
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm mb-2 text-center">
              {product.desc}
            </p>
            <span className="text-green-600 font-semibold text-lg mb-4">
              {product.price}
            </span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Produk Pensil</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pensilProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl shadow-lg p-6 bg-gradient-to-br from-white to-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow mb-4 flex items-center justify-center bg-gray-50">
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm mb-2 text-center">
              {product.desc}
            </p>
            <span className="text-green-600 font-semibold text-lg mb-4">
              {product.price}
            </span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
