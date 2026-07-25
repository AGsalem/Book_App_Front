"use client"
import { useEffect, useState } from "react"
import Logout from "./logout"
import Update from "./update"
import { useRouter } from "next/navigation"
import AddBook from "../mybooks/page"
export default function Setting() {
    const [mes, setMes] = useState<any>("")
    const [err, setErr] = useState("")
    const router = useRouter()
    useEffect(() => {
        try {
            const data = async () => {
                const res = await fetch("https://book-app-back-vert.vercel.app/setting",
                    { credentials: 'include' }
                )
                const response = await res.json()
                if (res.ok) {
                    if (response.mes) {
                        setMes(response.mes)
                    }
                    if (response.error) {
                        setErr(response.error)
                        setTimeout(() => {
                            router.push('/')
                        }, 4000);
                    }

                }
            }
                ; data()
        } catch (err) {
            setErr("ISE")
        }
    })
    return (
        <>
            <div className="h-screen bg-[#1E293B] ">
                {mes && (
                    <>
                        <div className="flex justify-center p-2 text-2xl  m-2 font-bold">
                            {mes}
                            <br />
                        </div>
                        <div className="relative ">
                            <div className=" bg-gray-600 flex    justify-center p-3  gap-3 rounded-2xl mr-4 font-bold text-2xl">
                                <Logout />
                                <div className="flex justify-center items-center">
                                    <Update />
                            </div>
                                {/* <AddBook></AddBook> */}
                            </div>
                        </div >
                        <br />


                    </>
                )}
                {err && (<>
                    <div className=" text-3xl flex justify-center p-5 font-bold">
                        404 {err}
                    </div>
                </>)}
            </div>

        </>
    )
}