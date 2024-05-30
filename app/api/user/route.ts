import { NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client";
import { stringify } from "querystring";
import { Anybody } from "next/font/google/index";
const prisma = new PrismaClient();

type ResponseData = {
  message: string;
};

type Userdata={
  username:string,
  email:string,
  password:string
}



export async function POST(request: Request) {
try{
  const body= await request.json();
  console.log(body.username);

   const res1= await prisma.user.findFirst({
    where:{
      name:body.username,
    },
  });
if(res1){
  throw(Error);
}else{

  const res= await prisma.user.create({
    data:{
      name:body.username,
      email:body.email,
      password:body.password
    },
  });

  return NextResponse.json({message:"User created"},{status:200});

}

}catch(e){
console.log("Some error");
return NextResponse.json({MessageChannel:'Some error occurred or invalid username or username exists'},{status:200});
}
}
