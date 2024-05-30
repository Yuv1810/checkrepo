// import Image from "next/image";
import { useRouter } from "@/node_modules/next/navigation";
import { useState } from "react";
import { redirect } from '@/node_modules/next/navigation'
import Logindirect from "./component/login-direct";
import Signupdirect from "./component/signup-direct";

export default function Home() {
  return (
    <>
    <div className="h-screen relative">
<nav className="flex h-20 w-screen bg-black justify-between px-6 py-4 h-12 items-center fixed z-20">
  <h1>Hello User </h1>
  <div>
 <Logindirect/>
<Signupdirect/>

  </div>
</nav>
<div className="h-3/6 sm:4/6 w-80 sm: w-50 sm: w-3/6 z-10 absolute top-48 md:top-36 text-black left-10 md:left-36 rounded-lg bg-black border mt-2"></div>

<div className="h-3/6 pt-20 border-b w-screen"> 
<h1 className="text-3xl mt-4 ml-10 md: ml-10">Reminders with Email notification.</h1>
</div>
<div className="h-3/6 bg-zinc-950 w-screen"></div>
    </div>
    </>
    
  );
}
