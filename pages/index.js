/********************************************************************************* *  
 * WEB422 – Assignment 3
*	I declare that this assignment is my own work in accordance with Seneca Academic Policy.  *  No part 
of this assignment has been copied manually or electronically from any other source *  
(including web sites) or distributed to other students.
* 
*	Name: Anurag Das ID: 126031228 Date: 2023-02-16
*
*
********************************************************************************/ 

import useSWR, { SWRConfig } from 'swr';
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';
import Accordion from 'react-bootstrap/Accordion';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const {data, error} = useSWR(`https://busy-pink-puffer-tam.cyclic.app/api/movies?page=${page}&perPage=10`)

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);
  
  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  function next() {
    setPage(page + 1);
  };

    return (
      <>
      <PageHeader text="Film Collection: Sorted by Date"/>
        <Accordion defaultActiveKey="0">
          {pageData && pageData.map(movies =>(
            <Accordion.Item eventKey={movies._id} key={movies._id}>
              <Accordion.Header>
                <p><strong>{movies.title}</strong> ({movies.year} - {movies.directors.join(', ')})</p>
              </Accordion.Header>
              <Accordion.Body>
                <MovieDetails movie={movies} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <Pagination>
        <Pagination.Prev onClick={previous} disabled={page === 1} />
        <Pagination.Item >{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
      </>
    );
}
