function Form(){

    function CadastrarUsuario(event){
        event.preventDefault()
        window.alert('Usuario cadastrado!') 
    }

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <input type='text' placeholder="Digite o seu Nome"></input>
                </div>
                <div>
                    <input type='submit' value="Cadastrar"></input>
                </div>
            </form>    
        </div>
    )
}

export default Form