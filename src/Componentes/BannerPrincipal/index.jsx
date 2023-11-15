import { useEffect, useState } from "react";
import FundoImagem from "../FundoImagem";
import Detalhes from "../Detalhes";




const BannerPrincipal = ({ AoClicado }) => {

    const [tela, setTela] = useState(window.innerWidth)
    window.addEventListener('resize', () => setTela(window.innerWidth))

    const [destaque, setDestaque] = useState('');
    const [descricao, setDescricao] = useState(null)
    const [logo, setLogo] = useState(null)

    const pegaDetalhes = () => {

    }

    const pegaLogo = (filme) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNGIzYjBmODJhMTIzNjMxYzMzMmEzZTA1NzIxNiIsInN1YiI6IjY1MWRhNjFlMDcyMTY2MDExYzAzNmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPay1qy7ZD1wQ-XkMuxAPqT1xNm2lHUqPaSuv_3b5t8'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${filme.id}/images?include_image_language=pt`, options)
            .then(response => response.json())
            .then(response => response.logos && setLogo(response.logos[0].file_path))
            .catch(err => console.error(err));
    }



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
            .then(data => setDestaque(data.results[Math.floor(Math.random() * data.results.length)]))
            .catch(err => console.error(err));
    }, [])

    useEffect(() => {
        destaque ? setDescricao(destaque.overview) : ''
    })


    destaque && pegaLogo(destaque)



    return (
        <div className="BannerContainer" onClick={() => AoClicado(destaque)}>
            {destaque && <FundoImagem filme={destaque} />}
            <div className="Informacoes absolute md:flex-row bottom-4 md:px-4 md:w-full ">
                <div className="Informacoes">
                    {tela >= 768 && logo ?
                        <img src={`https://image.tmdb.org/t/p/original/${logo}`} alt="" className="max-w-40 md:max-w-1/2 max-h-80 h-auto" /> :
                        <h2 className="Titulo text-center">{destaque.title}</h2>}
                    <div className="Dados">
                        <p className="border-r border-red-600 px-2">{destaque && destaque.release_date.split('-')[0]}</p>
                        <Detalhes filme={destaque} />
                    </div>
                </div>
                <p className="Descricao self-end">{descricao && descricao.length > 200 ? `${descricao.substr(0, 200)}...` : descricao} </p>
            </div>
        </div>
    )
}

export default BannerPrincipal;