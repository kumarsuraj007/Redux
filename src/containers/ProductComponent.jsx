import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((item) => {
        const { title, price, category, image, id } = item;
        // console.log(id)

        return (
            <div key={id}>
                    <Link to={`/product/${id}`} className="image">
                <div className="ui card" style={{ marginTop: '0px', display: "flex", justifyContent: "center", gap: "20px" }}>
                        <img src={image} alt={title} className="ui small image" style={{height: "200px", width: "200px", objectFit: "contain"}} />
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta">
                            <span className="price">${price}</span>
                        </div>
                        <div className="meta category">{category}</div>
                    </div>
                </div>
                    </Link>
            </div>
        );
    });

    return <div className="ui equal width four cards">{renderList}</div>;
};

export default ProductComponent;
