"use client"
import book from './book.png';
import { useRouter } from 'next/navigation'
import Hed from "@/componet/hed";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";
export default function Home() {
  const [err, seterr] = useState("") as any
  const [mes, setMes] = useState("") as any
  const router = useRouter()
  useEffect(() => {
    const show = async () => {
      const res = await fetch("/back/", {
        credentials: 'include'
      })
      try {
        if (res.ok) {
          const mess = await res.json()
          setMes(mess.mes)
          localStorage.setItem("nameOfUser", mes)
          setTimeout(() => {
            router.push(`${mes}`)
          }, 10);
        }
      } catch (err) {
        seterr(res)
      }

    };
    show()
  })
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <br />
        {/* لو خطأ */}
        <div className=" font-bold text-2xl t-2 rounded-3xl p-5 bg-[#138eb4ad]  mb-3 m-2 ">
          <div className="text-2xl font-bold flex justify-center">
            welcom to book app
          </div>
        </div>
        <Hed />
        <div className='mt-4 mb-5 '>
          <Image className='rounded-3xl w-full h-[500]' src={book} alt=''></Image>
        </div>
        <div className='bg-indigo-600 p-3 mb-10 font-bold rounded-3xl mt-5 text-l md:text-2xl '>
          Get free 100 pound  to buy books <Link href={'/login'} className='text-cyan-400'> sing now</Link>
        </div>
        <br />
        <section className="mt-auto ">
          <footer className=" rounded-2xl  border-t border-slate-800  ">
            <div className=" w-full  bg-[#1E293B] mx-auto  sm:flex-row items-center min-h-full flex flex-col p-9 justify-between text-sm text-slate-400 gap-4">
              <div >
                <p>© {new Date().getFullYear()} Book App . All rights reserved.</p>
              </div>
              <div >
                <p>provided by Ahmed Gamal Salem 2026</p>
              </div>
              <div className='text-x flex gap-6'>
                <Link href="https://github.com/agsalem" target="blank" className="hover:text-amber-500/85 transition-colors">github</Link>
                <Link href="https://github.com/AGsalem/Book_App_Front" target="blank" className="hover:text-amber-500/85 transition-colors">Source Code Front</Link>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}
