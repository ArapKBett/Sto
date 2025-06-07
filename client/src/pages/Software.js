import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Software() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products/software');
      setProducts(data);
    };
    fetchProducts();
  }, [refresh]);

  return (
    <div className="page">
      <h2>Software</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} refresh={() => setRefresh(!refresh)} />
        ))}
      </div>
    </div>
  );
}

export default Software;
