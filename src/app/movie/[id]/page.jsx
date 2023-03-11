import Image from "next/image";
async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full">
        <div className="md:flex md:justify-between mx-auto sm:my-4 sm:p-10 p-6">
      <Image
            className="rounded-md shadow-lg"
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
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
          <div className=" ml-6 leading-6 text-justify md:mt-0 mt-10">
          <h1 className=" text-cyan-500 font-bold sm: text-lg mb-5">{movie.name || movie.title}</h1>
            <p className="text-white text-sm">
          {movie.overview}
          </p>
          </div>
          </div>
    </div>
  );
}