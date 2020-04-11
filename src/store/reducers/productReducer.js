const initState = {
    products: [
        {id: '1', title: 'look at this toy mustang', content: 'mustang'},
        {id: '2', title: 'the brand new release looks great', content: 'tiny truck'},
        {id: '3', title: 'the truck will be the favorite', content: 'big truck'},
    ]
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            console.log('created product', action.product);
            return state;
        case 'CREATE_PRODUCT_ERROR':
            console.log('create product error', action.err);
            return state;
        default:
            return state;    
    }
}

export default productReducer