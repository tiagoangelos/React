import { useState } from "react";

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function CadastrarEmail(event){
        event.preventDefault()
        setUserEmail(email)
    }
    
    function LimparEmail(){
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadastre Seu Email:</h2>
            <form>
                <input type="email" placeholder="Digite o seu Email..." onChange={(event) => setEmail(event.target.value)}/>
                <button type='submit' onClick={CadastrarEmail}>Cadastrar Email</button>
                {userEmail && (
                    <div>
                        <p>O Email do usuário é: {userEmail}</p>
                        <button onClick={LimparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>

    )
}

export default Condicional