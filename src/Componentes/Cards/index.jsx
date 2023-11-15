
const Cards = ({ lista, AoClicado }) => {



    return (
        <ul className={`flex scrollbar-hide gap-4 overflow-auto`}>
            {lista.map((filme, index) =>
                <li className="min-w-[125px] md:min-w-[180px]" key={index} >
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" className="rounded-md" onClick={() => AoClicado(filme)} />
                </li>
            )
            }
        </ul>
    )
}

export default Cards;