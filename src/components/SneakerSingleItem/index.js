import { Container, Row, Col, Button} from 'react-bootstrap'
import './SneakerSingleItem.css'

import { connect } from 'react-redux'
import { addToCart } from '../../redux/Shopping/shopping-actions'
import { Redirect, useParams } from 'react-router-dom'

const SneakerSingleItem = ({ currentItem, addToCart, products}) => {
    const { id } = useParams()

    console.log('[SneakerSingleItem]')
  
    if (id !== currentItem.id) {
        // Handle case where id was manually entered
        const item = products.find(product => product.id === +id)
        if (item === undefined) {
            return <Redirect to="/" />
        } else {
            currentItem = item
        }
    }

    return (
        <Container fluid>
            <Row className="Sneaker-Single-Item">
                <Col lg={6} md={6} sm={8} className="Sneaker-Single-Item-Col-Img">
                <img className="Sneaker-Single-Item-Pic" src={currentItem.img}  alt={currentItem.name}/>
                </Col>
                <Col lg={6} md={6} sm={4} className="Sneaker-Single-Item-Col-Description">
                <h2>{currentItem.name}</h2>
                <p>€ {currentItem.price}</p>
                <p>{currentItem.description}</p>

                <Button onClick={() => addToCart(currentItem.id)} size="lg" block className="Add-To-Cart-Button">Add to Cart</Button>

                </Col>
            </Row>

        </Container>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem,
        products: state.shop.products,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart : (id) => dispatch(addToCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakerSingleItem)