import { Navigate, useNavigate } from "react-router-dom"

function Empresa(){

    const navigate = useNavigate()

    function HandleClick(){
        navigate('/')
    }

    return (
        <div>
            <h1>Empresa</h1>
            <p>Conteúdo da Aba Empresa</p>
            <p>
                Voltar para aba <button onClick={HandleClick}>Home</button>
            </p>
        </div>
    )
}

export default Empresa