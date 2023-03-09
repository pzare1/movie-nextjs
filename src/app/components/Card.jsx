import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ result }) {
  return (
    <>
      <div className=" cursor-pointer sm:p-3 sm:hover:shadow-cyan-900 sm:shadow-md rounded-lg transition-shadow group opacity-80">
        <Link href={`/movie/${result.id}`}>
          <Image
            className="group-hover:opacity-100 transition-opacity duration-300"
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL="/loading.svg"
            style={{
              maxWidth:"100%",
              height:"auto",
            }}
          ></Image>
        </Link>
      </div>
    </>
  );
}

export default Card;
