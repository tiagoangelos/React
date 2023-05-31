import { useState } from 'react';

function Form(){
    function CadastrarUsuario(event){
        event.preventDefault() //evitar scrool da pagina
        alert(`o usuario: ${name}, foi cadastrado com a senha: ${password}.`);
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
                        autoComplete='off'
                        required
                        onChange={(event) => setName(event.target.value)}
                    /> 
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type='password' 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha"
                        required
                        autoComplete='off' 
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div>
                    <input type='submit' value="Cadastrar"></input>
                </div>
            </form>    
        </div>
    
)}
    
export default Form