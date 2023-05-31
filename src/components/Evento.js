import Button from "./evento/Button";

function Evento(){

    function MeuEvento(){
        console.log(`ativando primeiro evento`);
    }

    function SegundoEvento(){
        console.log(`ativando segundo evento`)
    }

    return (
        <div>
            <p>Clique para disparar um evento!</p>
            <Button event={MeuEvento} text='Primeiro Evento' />
            <Button event={SegundoEvento} text='Segundo Evento' />
        </div>
    )
}

export default Evento