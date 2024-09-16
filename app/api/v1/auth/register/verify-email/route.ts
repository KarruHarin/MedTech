import { VerifyOtp } from "@/actions/VerifyEmailOtp";
import { NextResponse } from "next/server";

export const POST = async(req:any)=>{
     try{
      const body = await req.json();      
      const data = await VerifyOtp(body.otp,body.email)
      return NextResponse.json({email:data});
     }catch(err){
        console.log(err);     
      return NextResponse.json(err)
     }
}