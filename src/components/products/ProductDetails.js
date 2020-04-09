import React from 'react'

const ProductDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Product Title - {id}</span>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. ASpernautur</p>
                    </div>
                    <div className=" card-action gret lighten-4 grey-text">
                        <div>Posted by Jin Lezama</div>
                        <div>8 April, 6:34pm</div>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default ProductDetails