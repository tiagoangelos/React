import { Navigate, useNavigate } from "react-router-dom"

function Contato(){
    const navigate = useNavigate()

    function HandleClick(){
        navigate('/')
    }

    return (
        <div>
            <h1>Contato</h1>
            <p>Conteúdo da Aba Contato</p>
            <p>
                Voltar para aba <button onClick={HandleClick}>Home</button>
            </p>
        </div>
    )
}

export default Contato