"use client";
import { useRouter } from "@/node_modules/next/navigation";

export default function Signupdirect(){
    const router=useRouter();
    return(
        <>
         <button onClick={()=>{
    router.push('/signup');
  }} className="w-20 bg-white rounded-md border rounded h-12 text-black">Sign Up</button>

        </>
    )
}