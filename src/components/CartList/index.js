import CartListItem from '../CartListItem'
import './CartList.css'
import { Col, Container, Row, Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

const CartList = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
      let items = 0
      let price = 0

      cart.forEach(item => {
        items += item.qty
        price += item.qty * item.price

      })

      setTotalPrice(price)
      setTotalItems(items)

    }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])

    return (
        <Container>
            <Row className="Cart">
                <Col lg={8}>
                <h4>TOTAL NUMBER OF ITEMS IN CART ({totalItems})</h4>
                {cart.map(item => <CartListItem key={item.id} item={item}/>)}
                </Col>
                <Col lg={4}>
                    <h4>Summary and Checkout</h4>
                    <Row>
                        <Col>
                          Total Price
                        </Col>
                        <Col>
                          € {totalPrice}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                          Delivery
                        </Col>
                        <Col>
                          Free
                        </Col>
                    </Row>
                    <Button size="lg" block className="Checkout-Button">Checkout</Button>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(CartList)