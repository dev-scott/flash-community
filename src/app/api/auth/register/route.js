// import User from "@/models/User";
import { User } from "@/utils/db";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"


export const POST = async(request)=>{

    const {name , email , password} = await request.json();

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
        name , email , password:hashedPassword
    });


    try{

        await newUser.save();

        return new NextResponse("success" , {status:200})



    }catch(err){

        return new NextResponse("error" , {status:500})

    }

}