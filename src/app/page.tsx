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
          localStorage.setItem("nameOfUser",mes)
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
      <br />
      {/* لو خطأ */}
      <div className=" font-bold text-2xl t-2 rounded-3xl p-5 bg-[#138eb4ad]  mb-3 m-2 ">

        <div className="text-2xl font-bold flex justify-center">
          welcom to book app
        </div>
      </div>
      <Hed />
      <div className='bg-indigo-600 p-3  font-bold rounded-3xl mt-5 text-l md:text-2xl '>
        Get free 100 pound  to buy books <Link href={'/login'} className='text-cyan-400'> sing now</Link>
      </div>
      <div className='mt-4 mb-5 '>
        <Image className='rounded-3xl w-[95vm]' src={book} alt=''></Image>
      </div>
      <section >
        <footer className="w-full rounded-2xl bg-[#1E293B] border-t border-slate-800 py-6 mt-auto">
                <div className="max-w-[95%] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 gap-4">
                    <div>
                        <p>© {new Date().getFullYear()} Book App . All rights reserved.</p>
                    </div>
                    <div>
                      <p>provided by Ahmed Gamal Salem 2026</p>
                    </div>
                    <div className="flex gap-6">
                        {/* روابط الفوتر - عدلها براحتك */}

                        <Link href="https://github.com/agsalem" target="blank" className="hover:text-amber-500/85 transition-colors">github</Link>
                        <Link href="https://github.com/AGsalem/Book_App_Front" target="blank" className="hover:text-amber-500/85 transition-colors">Source Code Front</Link>
                    </div>
                </div>
            </footer>
      </section>
    </>
  );
}
