import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SneakerListItem.css'

import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../../redux/Shopping/shopping-actions'

const SneakerListItem = ({item, addToCart, loadCurrentItem}) => {

    const { id, name, img, description, price } = item
    return (
        <div className='Sneaker-List-Item'>
            <img src={img} className="Sneaker-Pic" alt={name}/>
            <div className="content">
                <h4 onClick={ () => loadCurrentItem(item)}><Link to={`/sneaker/${id}`} className="Link">{name}</Link></h4>
                <p>€ {price}</p>
                <p>{description}</p>
                <Button onClick={() => addToCart(id)} className="Add-To-Cart-Button">Add to Cart</Button>
            </div>

        </div>
    )
}

const mapDispatchToProps =  dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}
export default connect(null, mapDispatchToProps)(SneakerListItem)