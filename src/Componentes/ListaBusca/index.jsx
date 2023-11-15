
const ListaBusca = ({ filmes, AoClicado }) => {
    return (
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
    )
}

export default ListaBusca;