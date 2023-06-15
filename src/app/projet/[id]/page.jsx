import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/projets/${id}`, {
    
    caches: "no-cache",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
  console.log(res)

}

export async function generateMetadata({ params }) {
  const projet = await getData(params.id);
  return {
    title: projet.title,
    description: projet.desc,
  };
}



const ProjetPost = async ({ params }) => {
  const data = getData(params.id);

  return <div>page</div>;
};

export default ProjetPost;
