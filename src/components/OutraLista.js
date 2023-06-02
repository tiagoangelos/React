function OutraLista({ itens }){
    return (
        <>
            <h3>Lista De Tecnolôgias</h3>
            {itens.length > 0 ? (
                itens.map((itens, index) => <p key={index}>{itens}</p>)
            ) : (
                <p>A Lista Está Vazia!</p>
            )}
        </>
    )
}

export default OutraLista