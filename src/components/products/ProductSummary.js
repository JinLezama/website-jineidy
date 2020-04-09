import React from 'react';

const ProductSummary = () => {
    return (
        <div className="card z-depth-0 product-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Product Title</span>
                <p>Posted by Jin Lezama</p>
                <p className="grey-text">8 April, 5:30pm</p>
                <button className="upload">Upload</button>
            </div>
        </div>
    )
}

export default ProductSummary