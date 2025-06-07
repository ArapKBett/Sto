import axios from 'axios';

function ProductCard({ product, refresh }) {
  const handleBuy = async () => {
    try {
      await axios.post(`/api/products/${product._id}/sold`);
      refresh();
      alert(`${product.name} purchased!`);
    } catch (error) {
      alert('Purchase failed');
    }
  };

  return (
    <div className="product-card">
      <img src={product.image || '/placeholder.jpg'} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleBuy} disabled={product.sold}>Buy Now</button>
    </div>
  );
}

export default ProductCard;
