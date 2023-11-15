import Detalhes from "../../Detalhes";

const Poster = ({ filme, fundo }) => {


  const data = filme.release_date;


  return (
    <section className="relative">
      {fundo}

      <div className="PosterModal">
        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" className="rounded w-[35%]" />
        <div className=" flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl">{`${filme.title}`}</h2>
          <div className="Dados">
            <p className="text-sm border-r border-vermelho inline-block px-2">{data.split('-').reverse().join('/')}</p>
            <Detalhes filme={filme} />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Poster;