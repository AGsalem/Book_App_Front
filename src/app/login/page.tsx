'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"
export default function SINGUP() {
    const [username, setUsername] = useState<any>("")
    const [password, setPassword] = useState<any>("")
    const [mes, setmes] = useState([]) as any
    const [val, setVal] = useState([]) as any
    const [valErr, setValErr] = useState([]) as any
    const [aco, setaco] = useState([]) as any
    const [err1, sete] = useState<any>('')
    const [error, seterr] = useState<any>('')
    const router = useRouter()
    const [err, setErr] = useState<any>("")
    const Login = async () => {
        try {
            const res = await fetch("/back/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            }
            );
            const mess = await res.json()
            console.log(mess)
            if (res.ok) {
                if (mess.res) {
                    setmes(mess.message)
                    localStorage.setItem('nameOfUser',mess.res)
                    setTimeout(() => {
                        router.push(`${mess.res}`)
                    }, 100);
                }
                if (mess.mes) {
                    setaco(mess.mes)
                }
                sete(mess.mess)
                sete("")
                setValErr("")
                setVal("")
                // console.log(mes)
            }
            if (!res.ok) {
                sete(mess.log)
                setValErr(mess.error)
                setVal(mess.message)
                setErr(" Error:")
                setUsername("")
                setPassword("")
            }
        } catch (err) {
            console.error(err)
            seterr("ISE ")
        }
    };
    return (
        <>
            <div className=" flex bg-[#1E293B] flex-col md:flex-col p-4 md:p-5 font-bold  gap-4 md:gap-2  justify-center items-center h-screen ">
                <h1 className="text-3xl  flex bg-[#1E293B]  font-bold justify-center p-5">Book App </h1>

                <h1 className="text-3xl">LogIn </h1>
                <br />
                {/* <h1 className="text-xl mb-[1]"> Notes : unsername &   Password must be Bigger Than 8 words</h1> */}
                <br />
                <div className='text-red-400 mb-4'>

                    <h1>
                        {val &&
                            <>
                                {err}  {valErr}  {val}
                            </>
                        }
                        <br />
                        {aco}
                        {err1}
                        {error}

                    </h1>
                </div>
                <div className="text-green-500  text-2xl font-bold">
                    {mes}
                </div>
                <br />
                <input type="text"
                    autoComplete="false"
                    autoFocus
                    placeholder="username"
                    value={username}
                    className=" placeholder: border-amber-50 border  rounded-2xl text-xl p-4 "
                    onChange={(e: any) => { setUsername(e.target.value) }}
                />
                <input type="password"
                    autoComplete="false"
                    placeholder="pasword" className="
                    placeholder: border-amber-50 border  rounded-2xl text-xl p-4 "
                    value={password}
                    onChange={(e: any) => { setPassword(e.target.value) }} />
                <br />
                <button type="submit" onClick={() => Login()} className="text-xl bg-blue-700 p-6 rounded-2xl mb-4 hover:duration-700 translate-2 hover:scale-[1.05]  ease-in-out ">LogIn</button>
                <Link href='singup'>Dont have account go sign up</Link>
            </div>
        </>
    )
}