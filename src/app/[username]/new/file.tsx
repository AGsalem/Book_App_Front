'use client';
import { useEffect, useState } from "react";
export default function BookFile() {
    const [file, setFile] = useState<File | null>(null);
    const [mes, setMes] = useState<any>('')
    const [books, setbooks] = useState<any[]>([])
    const [err, seterr] = useState<any[]>([])

    const [errvaldata, setErrvaldata] = useState<any>("")
    useEffect(() => {
        const a = async () => {
            const returnName = await localStorage.getItem("nameOfUser")
            const a: any = localStorage.getItem("book")
            const re: any = JSON.parse(a)
            if (returnName?.length) {
                setbooks(Array.isArray(re) ? re : [re])
            }
        }; a()
    }, [])
    const send = async () => {
        if (!file) {
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/back/addBook", {
            method: 'POST',
            credentials: 'include',
            body: formData
        })
        const data = await res.json();
        console.log(data)
        if (res.ok) {
            localStorage.removeItem("book")
            setMes(data.message)
        } if (data.errvaldata) {
            setErrvaldata(data.errvaldata)
        }
        if (data.error) {
            seterr(data.error)
        }
    }
    return (
        <>
            <section>
                <div className="  flex md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-12 px-10">
                    {books.map((e: any) => {
                        return (
                            <>
                                <div
                                    key={e.name}
                                    className="flex flex-col from-slate-700 to-slate-900 border border-slate-600 shadow-2xl shadow-black/50 p-8 rounded-3xl hover:-translate-y-2 hover:shadow-amber-900/20 transition-all duration-300"
                                >
                                    <h1 className="text-2xl flex justify-center font-black">your book</h1>
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
                            </>
                        )
                    })}
                </div>
            </section>
            <label className="mb-4 text-3xl font-bold">Select file pdf or drag and drop</label>
            <input type="file"
                id="select pdf file"
                accept=".pdf,application/pdf"
                onChange={(e: any) => setFile(e.target.files?.[0] || null)}
                className=" mb-4 placeholder: border-amber-50 border  rounded-2xl text-xl p-4" />
            <button type='submit' onClick={send} className="text-2xl p-5 rounded-3xl bg-amber-950 font-extrabold"> Add Book</button>
            {mes && (<div className="text-green-600 ">{mes}</div>)}
            {errvaldata}
            {err}
        </>
    )
}