import Shop_Data from "../../../shop-data.json";
import { useContext } from "react";
import ProductCard from "../../product-card/product-card.component";
import { ProductsContext } from "../../../contexts/products.context";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
