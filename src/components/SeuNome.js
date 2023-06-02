function SeuNome({setNome}){
    return (
        <div>
            <p>Digite Seu Nome:</p>
            <input type="text" placeholder="Seu Nome" onChange={(event) => setNome(event.target.value)}></input>
        </div>
    )
}

export default SeuNome