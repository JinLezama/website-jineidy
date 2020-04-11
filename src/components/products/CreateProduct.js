import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../store/actions/productActions';
import { Redirect } from 'react-router-dom'

export class CreateProduct extends Component {
    state = {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProduct(this.state)
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div>
               <div className="container">
                   <form onSubmit={this.handleSubmit} className="white">
                       <h5 className="grey-text text-darken-3">New Product </h5>
                       <div className="input-field">
                           <label htmlFor="title">Title</label>
                           <input type="text" id="title" onChange={this.handleChange}/>
                       </div>
                       <div className="input-field">
                           <label htmlFor="content">Product Content</label>
                           <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                       </div>
                       <div className="input-field">
                           <button className="btn orange lighten-1 z-depth-0">Create</button>
                       </div>
                   </form>
                </div> 
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(CreateProduct)
