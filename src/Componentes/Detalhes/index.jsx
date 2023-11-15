import { useState } from "react";

const Detalhes = ({ filme }) => {
  const [tempo, setTempo] = useState('')

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNGIzYjBmODJhMTIzNjMxYzMzMmEzZTA1NzIxNiIsInN1YiI6IjY1MWRhNjFlMDcyMTY2MDExYzAzNmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPay1qy7ZD1wQ-XkMuxAPqT1xNm2lHUqPaSuv_3b5t8'
    }
  };

  fetch(`https://api.themoviedb.org/3/movie/${filme.id}?language=pt-BR`, options)
    .then(response => response.json())
    .then(response => setTempo(response.runtime))
    .catch(err => console.error(err));

  return (
    <p className="">{`${tempo} min`}</p>
  )
}


export default Detalhes;