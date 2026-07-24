'use client'
import Link from "next/link";
import { useState } from "react";
import Card from "./card";
export default function Shop() {

    return (
        <div className="bg-[#0F172A]     text-slate-200 antialiased flex flex-col justify-between">
            <div className="mb-10">
                <section>
                    <div className='flex flex-row justify-center font-bold p-5'>
                        <h1 className="text-2xl tracking-wide uppercase text-amber-500/90 drop-shadow-[0_2px_8px_rgba(245,158,11,0.15)]">
                            shop
                        </h1>
                    </div>
                </section>
                <section className="mt-4 ">
                    <Card />
                </section>
            </div>

            <footer className="w-full bg-[#1E293B] border-t border-slate-800 py-6 mt-auto">
                <div className="max-w-[95%] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 gap-4">
                    <div>
                        <p>© {new Date().getFullYear()} Book App . All rights reserved.</p>
                    </div>
                    <div className="flex gap-6">
                        {/* روابط الفوتر - عدلها براحتك */}

                        <Link href="https://github.com/agsalem" target="blank" className="hover:text-amber-500/85 transition-colors">github</Link>
                        <Link href="https://github.com/AGsalem/Book_App_Front" target="blank" className="hover:text-amber-500/85 transition-colors">Source Code Front</Link>

                    </div>
                </div>
            </footer>
        </div>
    )
}