"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
export default function Dashboard() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [mes, setMes] = useState("")
    const [err, seterr] = useState("")
    const [user, setuser] = useState("") as any
    const [sing, setSign] = useState(true)
    const [admin, setAD] = useState(false)
    const [ban, setBan] = useState(false)
    const [Books, setBooks] = useState("") as any

    const data = async () => {
        try {
            const res = await fetch('https://book-app-back-theta.vercel.app/page/admin', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, name, pass }),
                credentials: 'include'
            })
            const mess: any = await res.json()
            if (res.ok) {
                console.log(mess)
                setName("")
                setPass("")
                setId("")
                setMes(mess.welcom)
                setBan(mess.ban)
                setAD(true)
                setuser(mess.AllUsers)
                setBooks(mess.AllBook)
                console.log(mess)
                console.log(mess)
                useEffect(() => {
                    const aa = setInterval(() => { window.location.reload(); }, 100)
                    return () => {
                        setName("")
                        setPass("")
                        setId("")
                    }
                }, [])
            }
        } catch (err) {
            setName("")
            setPass("")
            setId("")
            seterr("Internal Server Erorr")
        }

    }
    return (
        <>
            <div className="bg-[#1E293B] text-xl justify-center items-center h-screen  ">
                {sing &&
                    <>
                        <div className=" flex flex-col md:flex-col p-4 md:p-5 font-bold rounded-3xl gap-4 md:gap-2  justify-center items-center h-screen ">
                            <h1 className="text-2xl">welcom from admin page</h1>
                            <br />
                            <div>
                                <input type="text" placeholder="id" value={id} onChange={(e: any) => setId(e.target.value)} className=" placeholder: border-amber-50 border  rounded-2xl text-xl p-4 " />
                            </div>
                            <br />
                            <input type="text" placeholder="name" value={name} onChange={(e: any) => setName(e.target.value)} className=" placeholder:rounded-2xl text-xl  border-amber-50 border rounded-2xl  p-4 " />
                            <div>
                                <br />
                                <input type="text" placeholder="pass" value={pass} onChange={(e: any) => setPass(e.target.value)} className=" placeholder:rounded-2xl text-xl border-amber-50 border rounded-2xl p-4 " />
                            </div>
                            <br />
                            <button type="submit" onClick={() => { data(); setAD(!admin); setSign(false) }} className="text-xl bg-blue-700 p-6 rounded-2xl hover:duration-700 translate-2 hover:scale-[1.2]  ease-in-out ">go</button>
                        </div>
                    </>
                }
                {err && <>
                    {ban}
                </>
                }
                {admin &&
                    <>
                        <br />
                        {mes && <>
                            <div className="text-2xl font-bold flex justify-center ">
                                <p >
                                    {mes}
                                </p>
                                <br />
                                <br />
                            </div>
                            <br />
                            <div className="text-2xl font-bold flex justify-center ">
                                <h1>All users</h1>
                            </div>
                            <br />
                            <div className="w-full overflow-x-auto px-4 max-w-full">
                                <table className="w-full border-collapse text-left text-sm md:text-base rounded-xl overflow-hidden border border-slate-700">
                                    <thead className="bg-slate-800 text-slate-200 border-b border-slate-700">
                                        <tr>
                                            <th className="p-4 font-semibold tracking-wider">id</th>
                                            <th className="p-4 font-semibold tracking-wider">name</th>
                                            <th className="p-4 font-semibold tracking-wider">pass</th>
                                            <th className="p-4 font-semibold tracking-wider">created in</th>
                                            <th className="p-4 font-semibold tracking-wider">name of search</th>
                                            <th className="p-4 font-semibold tracking-wider">cash</th>
                                            <th className="p-4 font-semibold tracking-wider">user OR seels</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-700 bg-slate-900/50 text-slate-300">
                                        {user.map((a: any) => (
                                            <tr key={a.id} className="hover:bg-slate-800/60 transition-colors duration-200">
                                                <td className="p-4 whitespace-nowrap font-medium text-slate-400">{a.id}</td>
                                                <td className="p-4 whitespace-nowrap">{a.username}</td>
                                                <td className="p-4 whitespace-nowrap max-w-[150px] truncate">{a.password}</td>
                                                <td className="p-4 whitespace-nowrap">{a.created_at}</td>
                                                <td className="p-4 whitespace-nowrap">{a.nameofsearch}</td>
                                                <td className="p-4 whitespace-nowrap text-green-400">{a.cash}</td>
                                                <td className="p-4 whitespace-nowrap">{a.userorsells}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-amber-500 h-4 text-amber-500 mt-4 mb-4 rounded-4xl"></div>
                            <div className="text-2xl font-bold flex justify-center ">
                                <h1>All users</h1>
                            </div>
                            <br />
                            <div className="w-full overflow-x-auto px-4 max-w-full">
                                <table className="w-full border-collapse text-left text-sm md:text-base rounded-xl overflow-hidden border border-slate-700">
                                    <thead className="bg-slate-800 text-slate-200 border-b border-slate-700">
                                        <tr>
                                            <th className="p-4 font-semibold tracking-wider">id book</th>
                                            <th className="p-4 font-semibold tracking-wider">id user</th>
                                            <th className="p-4 font-semibold tracking-wider">name</th>
                                            <th className="p-4 font-semibold tracking-wider">price</th>
                                            <th className="p-4 font-semibold tracking-wider">type</th>
                                            <th className="p-4 font-semibold tracking-wider">description</th>
                                            <th className="p-4 font-semibold tracking-wider">file name</th>
                                            <th className="p-4 font-semibold tracking-wider">created_at</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-700 bg-slate-900/50 text-slate-300  ">
                                        {Books.map((index: any) => (
                                            <tr key={index.id} >
                                                <td className="p-4 whitespace-nowrap font-medium text-slate-400">{index.id}</td>
                                                <td className="p-4 whitespace-nowrap">{index.id_user}</td>
                                                <td className="p-4 whitespace-nowrap">{index.name}</td>
                                                <td className="p-4 whitespace-nowrap text-amber-400">{index.sell}</td>
                                                <td className="p-4 whitespace-nowrap">{index.type}</td>
                                                <td className="p-4 max-w-xs truncate">{index.discription}</td>
                                                <td className="p-4 whitespace-nowrap">{index.filename}</td>
                                                <td className="p-4 whitespace-nowrap">{index.created_at}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>

                            { }
                        </>}
                    </>}
            </div>
        </>
    )
}