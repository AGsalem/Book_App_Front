"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function AddBook() {
    const [books, setbooks] = useState<any[]>([])
    const [Null, setNll] = useState<any>("")
    const [name, setName] = useState<any>("")

    useEffect(() => {
        const returnName = localStorage.getItem("nameOfUser")

        try {
            const a: any = localStorage.getItem("book")
            const re: any = JSON.parse(a)
            if (re.length === 0) {
                setNll("")
                setName(returnName)
                console.log(returnName)
            } else {
                setName(returnName)
                setbooks(Array.isArray(re) ? re : [re])
            }
        }
        catch (err) {
            setNll("")
            setName(returnName)
        }
    }, [])

    return (
        <div className="min-h-screen bg-[#1E293B] text-amber-50 flex flex-col pb-20">

            {books.length === 0 && (
                <h1 className="text-4xl text-center mt-20">
                    please go <Link href={`${name}/new`} className="text-amber-500 hover:text-amber-400 transition-colors">/new to create book</Link>
                </h1>
            )}

            {/* العنوان */}
            {books.length > 0 && (
                <div className="flex justify-center">
                    <h1 className="mb-16 mt-20 text-5xl font-bold tracking-wider">My books</h1>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
                {books.map((e: any) => {
                    return (
                        <div
                            key={e.name}
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
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}