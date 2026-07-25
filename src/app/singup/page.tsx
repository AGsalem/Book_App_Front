'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"
export default function SINGUP() {
    const [username, setUsername] = useState<any>("")
    const [password, setPassword] = useState<any>("")
    const [uorc, setuorc] = useState<any>("")
    const [nameofsearch, setNameofsearch] = useState<any>("")
    const [mes, setmes] = useState<any>("")
    const [err1, sete] = useState<any>('')
    const [error, seterr] = useState<any>('')
    const router = useRouter()
    const create = async () => {
        try {
            const res = await fetch("https://book-app-back-theta.vercel.app/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, nameofsearch, uorc }),
                credentials: 'include'
            }
            );
            const mess = await res.json()
            if (res.ok) {
                if (mess.mess) {
                    setmes(mess.mess)
                    // console.log(mess)
                }
                if (mess.mes) {
                    setmes(mess.mes)
                    localStorage.setItem("nameOfUser", nameofsearch)

                    setTimeout(() => {
                        router.push(`/${nameofsearch}`)
                    }, 3000);
                }
            }
            if (!res.ok) {
                sete(mess.err)

            }
        } catch (err) {
            seterr("ISE ")
        }
    };
    return (
        <>
            <div className=" flex bg-[#1E293B] flex-col md:flex-col p-4 md:p-5 font-bold  gap-4 md:gap-2  justify-center items-center h-screen ">
                <h1 className="text-3xl  flex bg-[#1E293B]  font-bold justify-center p-5">Book App </h1>

                <h1 className="text-3xl">Create Account </h1>
                <br />
                <h1 className="text-xl mb-[-11]"> Notes: unsername &   Password must be Bigger Than 8 words</h1>
                <br />

                {err1 && (<>
                    <h1> <div className="flex gap-3 ">
                        <h1 className='text-red-400 mb-4 text-lg '>{err1}</h1>
                        <Link href={"login"} className="text-lg text-green-400">go / login</Link></div>
                    </h1>
                </>
                )
                }
                <div className="text-green-500  text-2xl">
                    {mes}
                </div>
                <br />
                <input type="text"
                    placeholder="username"
                    value={username}
                    className=" placeholder: border-amber-50 border  rounded-2xl text-xl p-4 "
                    onChange={(e: any) => { setUsername(e.target.value) }}
                />
                <input type="password"
                    placeholder="pasword" className="
                    placeholder: border-amber-50 border  rounded-2xl text-xl p-4 "
                    value={password}
                    onChange={(e: any) => { setPassword(e.target.value) }} />
                <input type="text"
                    placeholder="Name Of Search" className="
                    placeholder: border-amber-50 border  rounded-2xl text-xl p-4 "
                    value={nameofsearch}
                    onChange={(e: any) => { setNameofsearch(e.target.value) }} />
                <br />
                <h1 className="text-2xl bg-cyan-600 p-2 rounded-4xl ">Seller | Buyer</h1>
                <br />
                <select className="bg-cyan-800 p-2 rounded-2xl ">
                    <option value="choose">Choose Seller OR Buyer OR Seller&Buyer</option>
                    <option value="seller" onClick={(e: any) => { setuorc(e.target.value) }}>Seller</option>
                    <option value="buyer" onClick={(e: any) => { setuorc(e.target.value) }}>Buyer</option>
                    <option value="seller&buyer" onClick={(e: any) => { setuorc(e.target.value) }}>Seller & Buyer</option>
                </select>
                <button type="submit" onClick={() => create()} className="text-xl bg-blue-700 p-6 rounded-2xl mb-4 hover:duration-700 translate-2 hover:scale-[1.05]  ease-in-out ">Create Account</button>
                <Link className="text-rose-400" href='login'>have account go / login </Link>
            </div>
        </>
    )
}