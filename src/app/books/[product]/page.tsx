'use client'
import { useState } from "react"
import { type a } from "./layout"
export default function Product({ params }: a) {

    const [v, setv] = useState<any>("")
    const a = async () => {
        const b: any = await params
        if (b == 'sh') {
            setv(b)
        }
    }
    return (
        <>
            <div className="bg-[#0F172A] min-h-screen text-slate-200 antialiased flex flex-col justify-between">
            {}
            </div>
        </>
    )
}