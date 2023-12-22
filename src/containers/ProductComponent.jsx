import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((item) => {
        const { title, price, category, image, id } = item;

        return (
            <div key={id}>
                <div className="ui card" style={{ marginTop: '0px', display: "flex", justifyContent: "center", gap: "20px" }}>
                    <Link to={`products/${id}`} className="image">
                        <img src={image} alt={title} className="ui small image" style={{height: "200px", width: "200px", objectFit: "contain"}} />
                    </Link>
                    <div className="content">
                        <Link to={`products/${id}`} className="header">{title}</Link>
                        <div className="meta">
                            <span className="price">${price}</span>
                        </div>
                        <div className="meta category">{category}</div>
                    </div>
                </div>
            </div>
        );
    });

    return <div className="ui equal width four cards">{renderList}</div>;
};

export default ProductComponent;
