"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Update() {
    const [mess, setMes] = useState<any>("")
    const [err, setErr] = useState<any>("")
    const [log, setLog] = useState<any>("")
    const [username, setUsername] = useState<any>("")
    const [password, setPassword] = useState<any>("")
    const [show, setShow] = useState<any>(false)
    const router = useRouter()
    const data = async () => {
        try {
            const res = await fetch("https://book-app-back-theta.vercel.app/update", {
                method: "PUT",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json()
            if (res.ok) {
                if (data.mes) {
                    setMes(data.mes)
                    setTimeout(() => {
                        router.push("/")
                    }, 100);
                if(data.log){
                    setLog(data.log)
                }
                }
            }

        } catch (err) {
            setErr("ISE")
        }
    }
    return (
        <>

            <button onClick={() => { setShow(!show) }}>update data</button>
            {show && (
                <>
                    {/* الحاوية الكبرى الشفافة التي تغطي الشاشة بالكامل وتقوم بالتوسيط */}
                    <div className="fixed inset-0 flex justify-center items-center pointer-events-none z-50">

                        {/* صندوق الفورم الفعلي */}
                        <div className="bg-cyan-500 p-6 rounded-2xl flex flex-col gap-5 pointer-events-auto shadow-2xl">
                            <input type="text"
                                value={username}
                                placeholder="New username"
                                onChange={(e: any) => { setUsername(e.target.value) }}
                                className="border-amber-50 border text-amber-50 placeholder:text-amber-300 rounded-2xl text-xl p-4 "

                            />
                            <input type="text"
                                value={password}
                                placeholder="New Password"
                                onChange={(e: any) => { setPassword(e.target.value) }}
                                className="border-amber-50 border text-amber-50 placeholder:text-amber-300 rounded-2xl text-xl p-4 "

                            />
                            <button type="submit" onClick={() => { data() }}> Update </button>
                            {mess && (
                                <>
                                    <div className="flex justify-center">
                                        {mess}
                                    </div>
                                </>
                            )}
                            {log&&(
                                <>
                                {log}
                                </>
                                )}
                        </div>

                    </div>
                </>
            )}
        </>
    )
}
