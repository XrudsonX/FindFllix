import { useEffect, useState } from "react";

const OndeAssistir = ({ filme }) => {

    const semProvedor = <p className="text-center my-8 border-x border-vermelho rounded-sm">Disponível apenas nos cinemas!</p>;

    const [provedor, setProvedor] = useState(null)


    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTBhNGIzYjBmODJhMTIzNjMxYzMzMmEzZTA1NzIxNiIsInN1YiI6IjY1MWRhNjFlMDcyMTY2MDExYzAzNmU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPay1qy7ZD1wQ-XkMuxAPqT1xNm2lHUqPaSuv_3b5t8'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${filme.id}/watch/providers`, options)
            .then(response => response.json())
            .then(response => setProvedor(response.results.BR))
            .catch(err => console.error(err));
    }, [])



    return (
        <div>
            {provedor ?
                <div className="flex flex-col gap-4">
                    {provedor.flatrate ?
                        <div className="flex flex-col gap-2">
                            <h3>Stream</h3>
                            <div className="flex gap-4 flex-wrap">
                                {provedor.flatrate.map(provedor =>
                                    <img src={`https://image.tmdb.org/t/p/original/${provedor.logo_path}`} alt={`${provedor.provider_name}`} className="w-10 rounded-md border border-gray-400" key={provedor.provider_name} />
                                )}
                            </div>
                        </div>
                        : ''}
                    {provedor.rent ?
                        <div className="flex flex-col gap-2">
                            <h3>Alugue</h3>
                            <div className="flex gap-4">
                                {provedor.rent.map(provedor =>
                                    <img src={`https://image.tmdb.org/t/p/original/${provedor.logo_path}`} alt={`${provedor.provider_name}`} className="w-10 rounded-md border border-gray-400" key={provedor.provider_name} />
                                )}
                            </div>
                        </div>
                        : ''}
                    {provedor.buy ?
                        <div className="flex flex-col gap-2">
                            <h3>Compre</h3>
                            <div className="flex gap-4">
                                {provedor.buy.map(provedor =>
                                    <img src={`https://image.tmdb.org/t/p/original/${provedor.logo_path}`} alt={`${provedor.provider_name}`} className="w-10 rounded-md border border-gray-400" key={provedor.provider_name} />
                                )}
                            </div>
                        </div>
                        : ''}

                </div> : <p className="text-center my-8 border-x border-vermelho rounded-sm">Disponível apenas nos cinemas!</p>
            }
        </div>
    )
}

export default OndeAssistir;