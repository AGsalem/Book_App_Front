"use client"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import BookFile from "./file"
export default function newBook() {
    const router = useRouter()
    const [name, setName] = useState("") as any
    const [sell, setSell] = useState<number>(20)
    const [type, setType] = useState<string>('Action')
    const [err, setErr] = useState("") as any
    const [ISE, setIse] = useState("") as any
    const [mes, setMes] = useState("") as any
    const [discription, setDesc] = useState("") as any
    const [file, setfile] = useState(false) as any
    const [data, setData] = useState(true) as any
    const [authError, setAuthError] = useState<any>("")

    useEffect(() => {
        const returnName = localStorage.getItem("book")
        if (returnName) {
            setfile(true)
            setData(false)

        }
        else {
            const auth = async () => {
                const data = await fetch("/back", {
                    credentials: 'include'
                })
                const res = await data.json()
                if (res.mes) {
                    // console.log(res)
                    // setData(true)
                }
                else if (res.error) {
                    setAuthError(res.error)
                    setData(false)
                    setfile(false)

                    setTimeout(() => {
                        router.push("/login")

                    }, 4000);
                }
            };
            auth()
        }
    }, [])
    const savedData = localStorage.getItem("book");
    let booksArray = [];
    if (savedData) {
        try {
            booksArray = JSON.parse(savedData);
            if (!Array.isArray(booksArray)) {
                booksArray = [booksArray];
            }
        } catch (error) { booksArray = []; }
    }
    const newBook = async () => {
        try {
            const data = await fetch("https://book-app-back-vert.vercel.app/new", {
                method: "POST",
                headers: { 'Content-Type': ' application/json' }
                ,
                body: JSON.stringify({ name, sell, type, discription }),
                credentials: 'include'
            }
            );
            const pro: any = { name, sell, type, discription }
            const res = await data.json()
            if (data.ok) {
                if (res.res) {
                    setfile(true)
                    setMes(res.res)
                    setErr(res.message)
                    setData(false)
                    booksArray.push(pro);
                    localStorage.setItem("book", JSON.stringify(booksArray))

                }
                // console.log(res)
                if (!data.ok) {
                    setErr(res.message)
                }
                if (res.message) {
                    setErr(res.message)
                }
                setErr(res.error)
            }
        }
        catch (err) { setIse("ISE") }
    }
    return (
        <>
            <div className="fixed m bg-[#6dad38d8] inset-0 flex justify-center placeholder: overflow-x-auto text-l  md:text-base items-center flex-col  z-50">
                {authError && (
                    <>
                        <div className="flex justify-center text-2xl">
                            {authError}
                        </div>
                    </>
                )}
                {data && (
                    <>
                        <h1 className='mb-5 text-2xl font-extrabold'>Add book</h1>
                        <input type="text"
                            onChange={(e: any) => { setName(e.target.value) }}
                            value={name}
                            placeholder="name of book"
                            className="mb-4 placeholder: font-bold border-amber-50 border  rounded-2xl text-xl p-4" />
                        <h2 className='text-2xl'>sell</h2>
                        <select className="mb-4 mt-4 placeholder:font-bold border-amber-50 border rounded-2xl text-xl p-4  text-white [&>option]:bg-blue-500  [&>option]:text-white" onChange={(e: any) => { setSell(e.target.value) }} >
                            <option value="20"  >20 (Default)</option>
                            <option value="40" >40</option>
                            <option value="60" >60</option>
                            <option value="80" >80</option>
                        </select>
                        <h2 className='text-2xl'>Type Of Book</h2>
                        <select className="mb-4 mt-4 placeholder:font-bold border-amber-50 border rounded-2xl text-xl p-4  text-white [&>option]:bg-blue-500  [&>option]:text-white"
                            onChange={(e: any) => { setType(e.target.value) }} >
                            <option value="Action">Action (Default)</option>
                            <option value="Horror" >Horror</option>
                            <option value="Comedy" >Comedy</option>
                            <option value="Romance" >Romance</option>
                        </select>
                        <textarea name="" id="" rows={8} placeholder="discription"
                            value={discription}
                            onChange={(e: any) => { setDesc(e.target.value) }}
                            className="mb-4 placeholder: font-bold border-amber-50 border  rounded-2xl text-xl p-4"></textarea>

                        {/* اولا لازم اسم الكتاب وحط الملف وحط نوع الكتاب واهم حاجة الامتداد  */}
                        <button type='submit' onClick={newBook} className="text-2xl p-5 rounded-3xl bg-amber-950 font-extrabold"> Add Book</button>

                    </>
                )}


                {
                    err
                }

                {
                    file && (
                        <>
                            <BookFile />
                        </>
                    )
                }{
                    authError&&(<div className="text-4xl`"> (401) </div>)}

            </div>
        </>
    )
}