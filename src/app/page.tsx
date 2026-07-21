"use client"
import { useRouter } from 'next/navigation'
import Hed from "@/componet/hed";
import Link from "next/link";
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
      <div className=''>
        {/*نا هيتحط الكارد  الي هيظهر فية الداتا  للكتب*/}
      </div>
    </>
  );
}
