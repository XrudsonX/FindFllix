import { useState } from "react";

const IconeBusca = ({ AoClicado }) => {
    const iconeAberto = "/icones/busca_aberto.svg"
    const iconeFechado = "/icones/busca_fechado.svg"
    const [icone, setIcone] = useState(iconeFechado)

    return (
        <div className="absolute top-8 right-4 z-10 flex" onClick={() => icone === iconeAberto ? setIcone(iconeFechado) : setIcone(iconeAberto)}>
            <img src={icone} alt="" className="w-8" onClick={AoClicado} />
        </div>
    )
}

export default IconeBusca;