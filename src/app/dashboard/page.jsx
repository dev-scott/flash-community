"use client"


import React from 'react'
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";




const Dashboard = () => {
  
  const session = useSession();
  // console.log(session)

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res)=>res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );


  if(session.status=="loading"){
    return <p>Loading...</p>
  }

  if(session.status="unauthenticated"){
    router?.push("/login");
  }

  const handleSubmit = async (e)=>{

    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try{
      await fetch("/api/posts",{

        method:"POST",
        body:JSON.stringify({
          title,
          desc,
          img,
          content,
          username:session.user.name,
        })

      });
      mutate();
      e.target.reset()
    }catch(err){
      console.log(err);
    }

  }


  const handleDelete= async(id)=>{

    try{

      await fetch(`/api/posts/${id}`,{

        method:"DELETE",


      });
      mutate();



    }catch(err){
      console.log(err);
    }


  }

  if(session.status == "authenticated"){
    return (
      <div>Dashboard</div>
    )

  }


}

export default Dashboard