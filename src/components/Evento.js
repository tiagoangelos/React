function Evento(){

    function MeuEvento(){
        window.alert('Opá Fui Ativado!');
    }

    return (
        <div>
            <p>Clique para disparar um evento!</p>
            <button onClick={MeuEvento}>Ativar</button>
        </div>
    )
}

export default Evento