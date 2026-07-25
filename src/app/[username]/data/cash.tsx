"use client"
import { useState, useEffect } from "react"
export default function Cash() {
    const [cash, setCash] = useState("")
    const [count, setCount] = useState("")
    useEffect(() => {
        const cash = async () => {
            const res = await fetch('https://book-app-back-vert.vercel.app/cash', {
                credentials: 'include'
            })
            const data = await res.json()
            if (res.ok) {
                setCash(data.cash)
                setCount(data.count)
            }
        }; cash()
    }, [])
    return (
    <>
        cash : {cash}  count Of book : {count}
    </>
    )
}