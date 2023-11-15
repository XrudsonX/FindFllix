
const Modal = ({ closeModal, openModal, poster, informacoes }) => {

    const handeClose = (e) => {
        if (e.target.id === 'fundoModal') closeModal();
    }


    if (!openModal) return null

    return (
        <div className="FundoModal z-20" onClick={handeClose} id="fundoModal">
            <div className="CorpoModal ">
                {poster}
                {informacoes}
            </div>

        </div>
    )
}

export default Modal;

