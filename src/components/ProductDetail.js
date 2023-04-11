import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../product_data/data";
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = () => {
      const productData = products.find((product) => product.id === productID);
      setProduct(productData);
    };

    fetchProductData();
  }, [productID]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.product1}>
      <div className={styles.container}>
        <h1 className={styles.title}>{product.name}</h1>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.details}>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Shipping Cost: ${product.shippingCost.toFixed(2)}</p>
          {/* Other product details */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
