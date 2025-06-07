import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Clothes() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products/clothes');
      setProducts(data);
    };
    fetchProducts();
  }, [refresh]);

  return (
    <div className="page">
      <h2>Clothes & Apparel</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} refresh={() => setRefresh(!refresh)} />
        ))}
      </div>
    </div>
  );
}

export default Clothes;
