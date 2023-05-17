import Item from "./Item"
import PropTypes from 'prop-types'

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="APPLE" lancamento={2006}/>
                <Item marca="ANDROID" lancamento={2005}/>
                <Item marca="MICROSOFT" lancamento={2012}/>
                <Item />
            </ul>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'faltou a marca',
    lancamento: 0,
}

export default List