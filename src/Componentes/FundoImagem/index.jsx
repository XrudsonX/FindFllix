import { useEffect, useState } from "react";
import ImagemTransparente from "../ImagemTransparente";

const FundoImagem = ({ filme }) => {

    const [tela, setTela] = useState(window.innerWidth)
    window.addEventListener('resize', () => { setTela(window.innerWidth) })


    const [fundoMobile, setFundoMobile] = useState(filme ? filme.poster_path : null)
    const [fundoDesktop, setFundoDesktop] = useState(filme ? filme.backdrop_path : null)



    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNGIzYjBmODJhMTIzNjMxYzMzMmEzZTA1NzIxNiIsInN1YiI6IjY1MWRhNjFlMDcyMTY2MDExYzAzNmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPay1qy7ZD1wQ-XkMuxAPqT1xNm2lHUqPaSuv_3b5t8'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${filme.id}/images?include_image_language=null`, options)
            .then(response => response.json())
            .then(response => setFundoMobile(response.posters[Math.floor(Math.random() * response.posters.length)].file_path))

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

        fetch(`https://api.themoviedb.org/3/movie/${filme.id}/images?include_image_language=null`, options)
            .then(response => response.json())
            .then(response => setFundoDesktop(response.backdrops[Math.floor(Math.random() * response.posters.length)].file_path))

            .catch(err => console.error(err));
    }, [])

    return (
        <ImagemTransparente
            url={`https://image.tmdb.org/t/p/original/${tela < 768 ? fundoMobile : fundoDesktop}`}
        />
    )
}

export default FundoImagem;