import Link from "next/link"
export default function Hed() {
    return (
        <>

            <br />
            {/* تم إضافة flex-col للموبايل و md:flex-row للكمبيوتر، مع تعديل الـ padding والـ gap ليتناسب مع الشاشات */}
            <div className="bg-[#1E293B] flex flex-col md:flex-row p-4 md:p-5 font-bold rounded-3xl gap-4 md:gap-2 justify-center items-center">
                {/* تم جعل الحاوية الداخلية flex-wrap عشان اللينكات تنزل تحت بعضها لو الشاشة صغيرة جداً، وتتحول لـ row في الشاشات الأكبر */}
                <div className="flex flex-wrap flex-col sm:flex-row transition-all duration-300 ease-out justify-between items-center gap-3 md:gap-5">
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <Link href='singup'>singup</Link>
                    </div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out">
                        <a href="login">log in</a>
                    </div>

                    <Link
                        className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out"
                        href="source">about Book App</Link>

                    {/* دة الي جوة الصفحة لازم ياخدidمثال
                <div id=1>واستعيدة في اللينك  */}

                    {/* /hover:-translate-y-2 hover:scale-[1.02]:  hover:shadow-2xl*/}
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <a className="transition-all duration-300 ease-out " href="https://github.com/AGsalem" rel="noopener noreferrer" target="blank">
                            GitHub
                        </a></div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <div className="flex ">
                            <a className="" href="https://www.linkedin.com/in/ahemdgamalsalem/" target="blank
                            "rel="noopener noreferrer">
                                LinkedIn
                            </a></div>
                    </div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out">
                        <a target="_blank" href="http://github.com/agsalem/Book-App-Back">see source code BackEnd</a>
                    </div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out">
                        <a target="_blank" href="http://github.com/agsalem/Book-App-Front">see source code FrontEnd</a>
                    </div>
                </div>
            </div>

        </>
    )
}