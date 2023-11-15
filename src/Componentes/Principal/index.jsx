import { useState } from "react";
import Cards from "../Cards";
import { useEffect } from "react";

const Principal = ({ selecionado }) => {
  const [pop, setPop] = useState([])
  const [rated, setRated] = useState([])
  const [breve, setBreve] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNGIzYjBmODJhMTIzNjMxYzMzMmEzZTA1NzIxNiIsInN1YiI6IjY1MWRhNjFlMDcyMTY2MDExYzAzNmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPay1qy7ZD1wQ-XkMuxAPqT1xNm2lHUqPaSuv_3b5t8'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&region=BR', options)
      .then(response => response.json())
      .then(data => setPop(data.results))
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNGIzYjBmODJhMTIzNjMxYzMzMmEzZTA1NzIxNiIsInN1YiI6IjY1MWRhNjFlMDcyMTY2MDExYzAzNmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPay1qy7ZD1wQ-XkMuxAPqT1xNm2lHUqPaSuv_3b5t8'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&region=BR', options)
      .then(response => response.json())
      .then(data => setRated(data.results))
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNGIzYjBmODJhMTIzNjMxYzMzMmEzZTA1NzIxNiIsInN1YiI6IjY1MWRhNjFlMDcyMTY2MDExYzAzNmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPay1qy7ZD1wQ-XkMuxAPqT1xNm2lHUqPaSuv_3b5t8'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1&region=BR', options)
      .then(response => response.json())
      .then(response => setBreve(response.results))
      .catch(err => console.error(err));
  })

  const [filmeSelecionado, setFilmeSelecionado] = useState('')



  return (
    <div className="px-2 mb-4">
      <h1 className="Titulo">Populares</h1>
      {pop &&
        <Cards
          lista={pop}
          AoClicado={selecionado}
        />
      }
      <h1 className="Titulo">Mais votados</h1>
      {rated &&
        <Cards
          lista={rated}
          AoClicado={selecionado}
        />
      }
      <h1 className="Titulo">Em breve</h1>
      {breve &&
        <Cards
          lista={breve}
          AoClicado={selecionado}
        />
      }
    </div>
  )
}

export default Principal;