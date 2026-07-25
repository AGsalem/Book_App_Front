"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
export default function AddBook() {
    const [books, setbooks] = useState<any[]>([])
    const [err, setErr] = useState<any>("")
    const [mes, setMes] = useState<any>("");
    const [booksForBE, setBE] = useState<any>("")
    useEffect(() => {
        const getbook = async () => {
            const res = await fetch("https://book-app-back-theta.vercel.app/mybooks", {
                credentials: 'include'
            })
            const data = await res.json()
            if (res.ok) {
                console.log(data)
                setBE(data.book)
                setMes(data.mes)
            }
        }; getbook()
        const returnName = localStorage.getItem("nameOfUser")
        if (returnName) {
            try {
                const a: any = localStorage.getItem("book")
                const re: any = JSON.parse(a)
                if (re.length === 0) {
                    console.log(returnName)
                } else {
                    setbooks(Array.isArray(re) ? re : [re])
                }
            }
            catch (err) {
                // console.clear()
            }
        }
    }, [])
    // console.clear()
    return (
        <div className="min-h-screen bg-[#1E293B] text-amber-50 flex flex-col pb-20">
            {/* لو مش عامل ولا كتاب */}
            {books.length === 0 && (
                <h1 className="text-4xl text-center mt-20">
                    please go <Link href={`new`} className="text-amber-500 hover:text-amber-400 transition-colors">/new to create book</Link>
                </h1>
            )}
            {/* العنوان */}
            {books.length > 0 && (
                <>
                    <div className="flex justify-center">
                        <h1 className="mb-16 mt-20 text-xl md:text-3xl font-bold tracking-wider">My books Not Completed</h1>
                    </div>
                    {/* لو في مستخدم عندة كتاب ومكملش تسجيل للداتا */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  mb-3 p-10">
                        <div >
                            {books.map((e: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col from-slate-700 to-slate-900 border border-slate-600 shadow-2xl shadow-black/50 p-8 rounded-3xl hover:-translate-y-2 hover:shadow-amber-900/20 transition-all duration-300"
                                    >
                                        <h2 className="text-3xl font-semibold mb-4 text-amber-200 border-b border-slate-600/50 pb-4">
                                            {e.name}
                                        </h2>
                                        <div className="flex flex-col gap-3 text-xl text-slate-200 mt-2">
                                            <p><span className="text-slate-400 font-medium">Type:</span> {e.type}</p>
                                            <p><span className="text-slate-400 font-medium">Sell:</span> {e.sell}</p>
                                            <p className=" leading-relaxed text-lg">
                                                <span className="text-slate-400 font-medium block mb-1">Description:</span>
                                                {e.discription}
                                            </p>
                                            <Link href={'new'} className="from-slate-500 to-slate-400 border bg-cyan-900 border-slate-300  p-3 rounded-2xl"> please go to uplaod your book  as pdf book</Link>
                                        </div>
                                        <button></button>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10   mb-3 p-10" >
                        {booksForBE && (<>
                        <div className="flex  col-span-full justify-center text-3xl">
                                <h3>{mes}</h3>
                            </div >
                            <div
                                className="flex flex-col from-slate-700 to-slate-900 border border-slate-600 shadow-2xl shadow-black/50 p-8 rounded-3xl hover:-translate-y-2 hover:shadow-amber-900/20 transition-all duration-300"
                            >
                                <h2 className="text-3xl font-semibold mb-4 text-amber-200 border-b border-slate-600/50 pb-4">
                                    {booksForBE .name}
                                </h2>
                                <div className="flex flex-col gap-3 text-xl text-slate-200 mt-2">
                                    <p><span className="text-slate-400 font-medium">Type:</span> {booksForBE .type}</p>
                                    <p><span className="text-slate-400 font-medium">Sell:</span> {booksForBE .sell}</p>
                                    <p className=" leading-relaxed text-lg">
                                        <span className="text-slate-400 font-medium block mb-1">Description:</span>
                                        {booksForBE .discription}
                                    </p>
                                    <Link href={'new'} className="from-slate-500 to-slate-400 border bg-cyan-900 border-slate-300  p-3 rounded-2xl"> please go to uplaod your book  as pdf book</Link>
                                </div>
                                <button></button>
                            </div>
                        </>
                        )}
                    </section>


                </>
            )}
        </div>
    )

}
