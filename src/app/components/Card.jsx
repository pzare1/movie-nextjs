import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiFillLike} from 'react-icons/ai'
import {MdGrade} from 'react-icons/md'


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
        <h2 className="truncate my-2 font-bold text-md text-cyan-500">{result.title || result.name}</h2>
        <p className="line-clamp-2 text-md text-cyan-100">{result.overview}</p>
        <div className="flex justify-between icons my-3 p-2">
            <div className="vote h-full items-center flex justify-between">
              <AiFillLike className=" text-cyan-500"/>
              <span className="ml-2">
              {result.vote_count}
              </span>
            </div>
            <div className="vote h-full items-center flex justify-between">
              <MdGrade className=" text-yellow-400"/>
              <span className="ml-2">
              {result.vote_average.toFixed(1)}
              </span>
            </div>
        </div>
      </div>
    </>
  );
}

export default Card;
