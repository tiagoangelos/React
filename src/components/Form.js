import { useState } from 'react';

function Form(){

    function CadastrarUsuario(event){
        event.preventDefault()
        console.log(`O Usuario: ${name}, Foi Cadastrado com a Senha: ${password}.`)
        
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type='text' 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu Nome"
                        onChange={(e) => setName(e.target.value)}
                    /> 
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type='password' 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type='submit' value="Cadastrar"></input>
                </div>
            </form>    
        </div>
    )
}

export default Form