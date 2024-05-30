"use client";
import { useRouter } from "@/node_modules/next/navigation";


export default function Logindirect(){
    const router=useRouter();
    return(
        <>
         <button onClick={()=>{
    router.push('/login');
  }} className="w-20 bg-black rounded-md border rounded m-auto mr-auto mt-4 mr-6 h-12 hover:bg-white hover:text-black">Login</button>

        </>
    )
}