'use client'
import { use, useState, useEffect } from "react";
import Cash from "./data/cash";
import { useRouter } from 'next/navigation';
import Link from "next/link";
export type a = { params: Promise<{ username: string }> };
export default function User({ params }: a) {
    const [err, seterr] = useState("") as any
    const [name, setname] = useState("") as any
    const [uorc, setuorc] = useState("") as any
    const [buy, setBuy] = useState("") as any
    const [notNamefSearch, setNot] = useState("") as any
    const [trueName, setTrue] = useState<any>("")

    const { username } = use(params)
    const router = useRouter()
    useEffect(() => {
        try {
            const data = async () => {
                const res = await fetch(`back/${username}`, {
                    credentials: 'include'
                })
                const data: any = await res.json()
                if (res.ok) {
                    setname(data.User)
                    if (data.uorc == 'seller&buyer' || data.uorc == 'seller') {
                        setuorc(data.uorc)
                    }
                    else if (data.notTrueName) {
                        setNot(data.notTrueName)
                        setTrue(data.name)
                        setTimeout(() => {
                            router.push(trueName)

                        }, 3000);
                    }
                    else if (data.uorc == 'buyer') {
                        setBuy(data.uorc)

                    }
                }
                if (!res.ok) {
                    // حط الاخطاء تبع التحقق والكوكيز
                    seterr("Page Not Found")
                    setTimeout(() => {
                        router.push("/")
                    }, 3000);
                }
            };
            data()
        }
        catch (err) {
            seterr("ISE")
        }
    })
    return (
        <>
            <div className="h-screen bg-[#1E293B]   ">
                {name &&
                    <>
                        <br />
                        <div className="bg-teal-600 gap-4 p-5 flex flex-col md:flex-row justify-center items-center text-lg md:text-xl font-bold rounded-2xl mb-8">
                            <Link href={`${username}/setting`} >Setting  </Link>
                            <Link href={"shop"} > See Shop </Link>
                            <Link href={"#"}>My Purchases</Link>
                            {uorc && (
                                <div className="  justify-center items-center gap-3 md:gap-5 flex flex-col md:flex-row p-2 font-bold rounded-3xl ">

                                                <Link className="hover:-translate-y-1.5 hover:scale-[1.02]  transition-all duration-300 ease-out" href={`${username}/new`}>add new book</Link>
                                                <Link  className='hover:-translate-y-1.5 hover:scale-[1.02]  transition-all duration-300 ease-out'href={`${username}/book`}>My books</Link>

                                </div>
                            )}
                        </div>
                        <div className="text-xl md:text-xl font-bold flex flex-wrap justify-center text-center static p-6 bg-cyan-600 rounded-3xl z-20 mb-8">
                            {name} (DashBoard) {uorc} {buy}
                        </div>

                        <div className="bg-gray-600 text-xl md:text-xl font-bold p-5 justify-center rounded-2xl flex text-center">
                            <Cash></Cash>
                        </div>

                    </>
                }
                {err &&
                    <div className="flex justify-center text-5xl h-screen  items-center">
                        <br />
                        <h1>{err} you Will  auto go  / in 3 Socond</h1>
                    </div>
                }
                {notNamefSearch && (<>
                    <div className="flex justify-center text-md">
                        {notNamefSearch}
                    </div>
                </>)}
            </div >
        </>)
}
