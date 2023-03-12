import Results from '@/app/components/Results';
async function page({params}) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`)
  if(!res.ok){
    throw new Error("error in search")
  }
  const data = await res.json();
  const results = data.results;

  return (
    <>
    {results && results.length === 0 && (
      <h1 className='text-center text-white'> data not found</h1>
    )}
    {results && <Results results={results} />}
    </>
  )
}

export default page