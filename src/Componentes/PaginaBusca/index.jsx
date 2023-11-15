import { useState } from "react";
import Cards from "../Cards";

const PaginaBusca = ({ AoClicado }) => {

    const [filmes, setFilmes] = useState('')





    const ProcuraFilmes = (valor) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNGIzYjBmODJhMTIzNjMxYzMzMmEzZTA1NzIxNiIsInN1YiI6IjY1MWRhNjFlMDcyMTY2MDExYzAzNmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPay1qy7ZD1wQ-XkMuxAPqT1xNm2lHUqPaSuv_3b5t8'
            }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${valor}&include_adult=false&language=pt-BR&page=1`, options)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(err => console.error(err));
    }



    return (
        <div>
            <div className="flex justify-center">
                <input type="search" id="input" className="absolute top-8 h-8 md:w-[80%] rounded-md bg-cinza focus:outline-none px-4 text-lg text-white" placeholder="Pesquise aqui!" onInput={(e) => setTimeout(() => { ProcuraFilmes(e.target.value) }, 2000)} />
            </div>
            <div className="flex justify-center">
                {filmes &&
                    <div className="px-4">
                        <ul className=" mt-24 mb-4 flex flex-wrap justify-center gap-2">
                            {filmes.map((filme) =>
                                <li className="w-[100px] md:w-[160px]" onClick={() => AoClicado(filme)}>
                                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" className="rounded-md" />
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default PaginaBusca;