import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h2>Welcome to ArapStore</h2>
      <p>Explore our wide range of products:</p>
      <ul>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
        <li><Link to="/clothes">Clothes & Apparel</Link></li>
      </ul>
    </div>
  );
}

export default Home;
