import React, { Component } from 'react';
import Notifications from './Notifications';
import ProductList from  '../products/ProductList';
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { products } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProductList products={products} />
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                    <Notifications />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}

export default connect(mapStateToProps)(Dashboard)