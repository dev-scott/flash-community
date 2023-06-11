import React from "react";
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image";


async function getData(){

  const res = await fetch("htps://localhost:3000/api/posts",{
    cache:"no-cache"
  });

  if(!res.ok){
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;


}

const Blog = async () => {
  return (
    <div className="w-full bg-hero-pattern">
      <div className=" bg-base-300 relative  mt-8  h-[800px] rounded-xl   py-4  max-w-screen-2xl  mx-auto px-4   ">
      <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>      </div>
    </div>
  );
};

export default Blog;
