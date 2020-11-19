import SneakerListItem from "../SneakerListItem"
import './SneakerList.css'

import { connect } from 'react-redux'

const SneakerList = ({products}) => {
    return (
       <div className="Sneaker-List">
           { products.map(item => <SneakerListItem key={item.id} item={item} /> )}
       </div> 
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(SneakerList)