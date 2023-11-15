import { useState } from "react";

const Informacoes = ({ sinopse, ondeAssistir }) => {
    const [descricaoAtiva, setDescricaoAtiva] = useState(true);
    const [ondeAssistirAtiva, setOndeAssistirAtiva] = useState(false)

    const AlternarBotao = () => {
        setDescricaoAtiva(!descricaoAtiva)
        setOndeAssistirAtiva(!ondeAssistirAtiva)
    }

    return (
        <div className="text-white flex flex-col p-2 gap-4">
            <div className="flex gap-4">
                <button onClick={AlternarBotao} className={`${descricaoAtiva ? 'BtnAtivo' : ""}`}>Sinopse</button>
                <button onClick={AlternarBotao} className={`${ondeAssistirAtiva ? 'BtnAtivo' : ""}`}>Onde assistir</button>
            </div>
            {descricaoAtiva ? sinopse : ondeAssistir}
        </div>
    )
}

export default Informacoes;