import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>ArapStore</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li>
          <Link to="/electronics">Electronics</Link>
          <ul>
            <li><Link to="/electronics/phones">Phones</Link></li>
            <li><Link to="/electronics/pcs">PCs</Link></li>
            <li><Link to="/electronics/software">Software</Link></li>
            <li><Link to="/electronics/accessories">Accessories</Link></li>
          </ul>
        </li>
        <li><Link to="/clothes">Clothes & Apparel</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
