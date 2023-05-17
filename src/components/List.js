import Item from "./Item"

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="APPLE"/>
                <Item marca="ANDROID"/>
                <Item marca="MICROSOFT"/>
            </ul>
        </>
    )
}

export default List