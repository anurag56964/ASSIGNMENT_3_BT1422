import { useRouter } from "next/router";
import useSWR from "swr";
import MovieDetails from "@/components/MovieDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

export default function Title() {
  const router = useRouter();
  const { title } = router.query;
  
  if(!title){
    console.log(title);
  } else{
    console.log(title);
  }

  const {data, error} = useSWR(`https://busy-pink-puffer-tam.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);

  if (!data) {
    return null;
  }

  if (error) {
    return <Error statusCode={500} title="Error"/>
  }

  if (!data.length) {
    return <Error statusCode={404} title="No Movie in collection"/>
  }

    return (
      <>
      {data && data.map(movie => (
        <div key={movie._id}>
          <PageHeader text={movie.title}/>
          <MovieDetails movie={movie} />
        </div>
      ))}
      </>
    );
  }
  