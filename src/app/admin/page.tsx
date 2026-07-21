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
    const data = async () => {
        try {
            const res = await fetch('/back/page/admin', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, name, pass }),
                credentials: 'include'
            })
            const mess: any = await res.json()
            if (res.ok) {
                // console.log(mess)
                setName("")
                setPass("")
                setId("")
                setMes(mess.welcom)
                setBan(mess.ban)
                setAD(true)
                setuser(mess.AllUsers)
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
                            <div className="w-full overflow-x-auto text-sm md:text-base px-4">
                                <table className="w-max mx-auto">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <td className="p-5">id</td>
                                            </th>
                                            <th>
                                                <td className="p-2 "> name</td>
                                            </th>
                                            <th>
                                                <td className="p-2 ">pass</td>
                                            </th>
                                            <th>
                                                <td className="p-2 ">_______created in_______</td>
                                            </th>
                                            <th>
                                                <td>name of search</td>
                                            </th>
                                            <th>
                                                <td className="p-2 ">cash</td></th>
                                            <th>
                                                <td className="p-2 ">user OR seels</td>
                                            </th>
                                        </tr>
                                    </tbody>
                                    {user.map((a: any) => (<>
                                        <tr key={a.id}>
                                            <td>{a.id}</td>
                                            <td>{a.username}</td>
                                            <td>{a.password}</td>
                                            <td>{a.created_at}</td>
                                            <td>{a.nameofsearch}</td>
                                            <td>{a.cash}</td>
                                            <td>{a.userorsells}</td>

                                        </tr></>

                                    ))}

                                </table>
                            </div>
                            <div className="bg-amber-500 h-4 text-amber-500 mt-4 mb-4 rounded-4xl"></div>
                            <div>
                                <h1></h1>
                            </div>
                        </>}
                    </>}
            </div>
        </>
    )
}
