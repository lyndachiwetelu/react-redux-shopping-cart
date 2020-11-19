import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar} from 'react-bootstrap'
import { Cart4 } from 'react-bootstrap-icons'
import SneakerList from '../SneakerList';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import SneakerSingleItem from '../SneakerSingleItem';
import CartList from '../CartList';

import { connect } from 'react-redux'
import { useEffect, useState } from 'react';

function App( { cart, currentItem }) {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let count = 0
    cart.forEach(item => {
      count += item.qty
    })
    setCartCount(count)
  }, [cart, cartCount])

  return (
    <div className="App">
      <Router>
      <Navbar className="NavBar">
        <Navbar.Brand className="Navbar-Brand"> 
          <Link to="/" className="Link">Lynda's Sneaker Shop</Link>
            </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end NavBar-Collapse">
          <Navbar.Text className="Navbar-Text">
          <Link to="/cart" className="Link"><Cart4 size={40}/> ({cartCount})</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
          <Route path="/sneaker/:id" children={!currentItem ? <Redirect to="/"/> : <SneakerSingleItem />} />
          <Route path="/cart" component={CartList} />
          <Route path="/" component={SneakerList} />
        </Switch>
      </Router>
    </div>

  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);
