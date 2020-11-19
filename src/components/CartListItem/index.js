import './CartListItem.css'
import { Col, Row, Form } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'

import { connect } from 'react-redux'
import { changeQty, removeFromCart } from '../../redux/Shopping/shopping-actions'
import { useState } from 'react'

const CartListItem = ({ item, removeFromCart, changeQty }) => {
    const [input, setInput] = useState(item.qty)

    const onChangeHandler = e => {
        setInput(e.target.value)
        changeQty(item.id, e.target.value)
    }

    return (
        <Row className="CartListItem">
            <Col lg={4} className="Cart-List-Item-Col-Img">
                <img className="Cart-List-Item-Img" src={item.img}  alt={item.name}/>
            </Col>
            <Col lg={4}>
                <h4>{item.name}</h4>
                <p>€ {item.price}</p>
                <p>{item.description}</p>
            </Col>
            <Col lg={4}>
                <Form >
                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" value={input} onChange={onChangeHandler} min={1}/>
                    </Form.Group>
                </Form>
                <button onClick={() => removeFromCart(item.id)} className="Remove-From-Cart-Button"><Trash className="Remove-From-Cart"/></button>
            </Col>
        </Row>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        changeQty: (id, value) => dispatch(changeQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(CartListItem)
