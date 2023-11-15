const ListaFilmes = (props) => {

    return (
        props.map(filme =>
            <li className="min-w-[125px] max-w-[125px] snap-start">
                <img src={filme.imagemUrl} alt="" className="rounded-md" />
            </li>
        )
    )
}

export default ListaFilmes;