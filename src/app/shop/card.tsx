export default function Card() {
    return (
        <>
            <div className="bg-[#0F172A] p-3 mt-4 " >

                       <section className="w-full  mx-auto px-[10px] md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 justify-center">

                        {/* تنبيه: هنا مكان البيانات الوهمية لتجربة الكارد. */}
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                                <div key={item} className="bg-[#1E293B] border border-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between  p-2">
                                    <div>
                                        <div className="w-full h-48 bg-[#334155] rounded-lg mb-4 flex items-center justify-center text-slate-400 text-sm">
                                            Product Image
                                        </div>
                                        <h2 className="text-lg font-semibold text-white mb-2">اسم المنتج التجريبي</h2>
                                        <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                                            هذا نص وصف تجريبي للمنتج يوضح كيف سيظهر الكلام هنا بشكل متناسق ومريح للعين دون إزعاج الزائر.
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-amber-500/80 font-semibold text-base tracking-wide">$99.99</span>
                                        <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            ))}

                    </div>
                </section>

                </div>
            </>
            )
}