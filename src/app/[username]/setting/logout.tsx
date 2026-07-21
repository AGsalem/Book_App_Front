"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
export default function Logout() {
    const router = useRouter()
    const [mes, setMes] = useState<any>("")
    const [err, setErr] = useState<any>("")
    const req = async () => {
        try {
            const res = await fetch("/back/logout", {
                method: "DELETE",
                credentials: 'include'

            })
            const come = await res.json()
            if (res.ok) {

                setMes(come.message)
                setTimeout(() => {
                    router.push("/")
                }, 2000);
            }
            if (!res.ok) {
                setMes(come.message)
            }

        } catch (err) {
            setErr("ISE")
        }
    }
    return (
        <div>
            {err}
            <button className="hover:-translate-y-1.5 hover:scale-[1.02]:   transition-all duration-500 ease-out ml-4 font-bold " onClick={req}>Logout</button>
            <br />
            {mes && (
                <div className="animate-bounce ">
                    <br />
                    {mes}
                </div>
            )}
        </div>
    )
}