import React from 'react'
import Navbar from '../uangkas/page'

export default function page() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}


// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const login = (e: React.FormEvent) => {
//     e.preventDefault();

//     const validEmail = 'admin@example.com';
//     const validPassword = 'password123';

//     if (email === validEmail && password === validPassword) {
//       alert('Login berhasil!');
//       router.push('/dashboard');
//     } else {
//       alert('Email atau password salah');
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('https://wallpaperaccess.com/full/2727553.jpg')",
//       }}
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//     >
//       <div className="bg-[#adb8af]  bg-opacity-90 p-6 rounded-lg shadow-md w-full max-w-sm backdrop-blur-sm">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         <form onSubmit={login} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             required
//             className="border border-grey rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#363634]"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             required
//             className="border border-grey  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#363634]"
//           />
//           <button
//             type="submit"
//             className="bg-[#363634]  hover:bg-[#DDDAD0] text-white py-2 rounded transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
