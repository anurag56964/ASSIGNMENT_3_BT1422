import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export function getStaticProps() {
    // Call an external API endpoint to get posts
    return new Promise((resolve,reject)=>{
      fetch('https://busy-pink-puffer-tam.cyclic.app/api/movies/573a13baf29313caabd506e4').then(res=>res.json()).then(data=>{
        resolve({ props: { movie: data } })
      })
    })
  }
  

export default function About(props) {
    return (
      <>
      <PageHeader text="DEVELOPER - ANURAG DAS" />
      <Card className="bg-light">
        <Card.Body>
          <p>
            I am Anurag and I am from Bangladesh. 
          </p>
          <p>
            My enjoyed movie- 
            {' '}
            <Link href={`/movies/${props.movie.title}`} legacyBehavior>
              <a>{props.movie.title}</a>
            </Link>
          </p>
        </Card.Body>
      </Card>
      <br />
      <MovieDetails movie={props.movie} />
      </>
    );
  }