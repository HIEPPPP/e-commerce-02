import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescBox from "../Components/DescBox/DescBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productID } = useParams();
    // eslint-disable-next-line no-unused-vars
    const product = all_product.find((e) => e.id === Number(productID));
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescBox />
            <RelatedProduct />
        </div>
    );
};

export default Product;
