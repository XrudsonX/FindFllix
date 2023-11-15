import { useState } from "react"
import BannerPrincipal from "./Componentes/BannerPrincipal"
import Modal from "./Componentes/Modal"
import Principal from "./Componentes/Principal"
import Poster from "./Componentes/Modal/Poster"
import Informacoes from "./Componentes/Modal/Informacoes"
import Sinopse from "./Componentes/Modal/Informacoes/Sinopse"
import OndeAssistir from "./Componentes/Modal/Informacoes/OndeAssistir"
import FundoImagem from "./Componentes/FundoImagem"
import IconeBusca from "./Componentes/IconeBusca"
import PaginaBusca from "./Componentes/PaginaBusca"

function App() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)

  const [openModal, setOpenModal] = useState(false)

  const [buscaAtiva, setBuscaAtiva] = useState(false)

  const recebeFilme = (filme) => {
    setFilmeSelecionado(filme)
    setOpenModal(true)
  }


  return (
    <div className="bg-fundo min-h-screen min-w-screen overflow-hidden">
      {<IconeBusca AoClicado={() => setBuscaAtiva(!buscaAtiva)} />}
      {buscaAtiva && <PaginaBusca AoClicado={recebeFilme} />}
      {!buscaAtiva && <div>
        <BannerPrincipal
          AoClicado={recebeFilme}
        />
        <Principal
          selecionado={recebeFilme}
        />
      </div>}


      <Modal
        openModal={openModal}
        poster={<Poster
          filme={filmeSelecionado}
          fundo={<FundoImagem
            filme={filmeSelecionado}
          />}
        />}
        informacoes={
          <Informacoes
            sinopse={<Sinopse
              filme={filmeSelecionado}
            />}
            ondeAssistir={<OndeAssistir
              filme={filmeSelecionado}
            />}
          />}
        closeModal={() => setOpenModal(false)}
      />


    </div>
  )
}

export default App;
