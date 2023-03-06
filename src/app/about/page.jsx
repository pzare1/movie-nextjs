import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="max-w-5xl sm:p-10 p-10 lg:p-2 mx-auto space-y-2 my-10">
        <h1 className=" font-bold md:text-3xl text-2xl text-cyan-500 my-5">
          About
        </h1>
        <p className=" text-justify leading-8 md:leading-8 lg:leading-10 text-cyan-50 font-light mx-auto">
          Movie websites have become an essential resource for movie lovers,
          providing a wealth of information about the latest movies, trailers,
          reviews, and showtimes. One popular feature of these websites is the
          ability to see what movies are coming up next. This is an important
          feature because it allows moviegoers to plan ahead and decide which
          movies they want to see in the future. These websites typically
          provide information on the title of the upcoming movie, its release
          date, cast and crew, and a brief synopsis. By utilizing these
          websites, movie fans can stay up-to-date on the latest releases and
          plan their movie-watching experience accordingly. Additionally, these
          websites can also help moviegoers discover new movies they may not
          have otherwise known about, expanding their horizons and introducing
          them to new genres and filmmakers.
        </p>
        <Image
          src="/images/movie.jpg"
          alt="movie"
          width={8000}
          height={400}
        />
      </div>
    </>
  );
}

export default About;
