import Results from "./components/Results";

const API_KEY = process.env.API_KEY
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "trending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "Top" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const results = data.results;
  console.log(results)
  if(!res.ok){
    throw new Error("failed to get data")
  }

  return (
        <>
          <div>
            <Results results={results}/>
          </div>
        </>
  )
}
