import Image from "next/image";
import Link from "next/link";
import diagram from './diagram.png'
export default  function SOURCE (){
return (
<>
<div className="flex  justify-center p-40 ">
<Image className="rounded-2xl" src={diagram}  alt=""></Image>
</div>
</>
)
}