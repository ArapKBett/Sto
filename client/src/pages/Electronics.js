import { Link } from 'react-router-dom';

function Electronics() {
  return (
    <div className="page">
      <h2>Electronics</h2>
      <p>Choose a category:</p>
      <ul>
        <li><Link to="/electronics/phones">Phones</Link></li>
        <li><Link to="/electronics/pcs">PCs</Link></li>
        <li><Link to="/electronics/software">Software</Link></li>
        <li><Link to="/electronics/accessories">Accessories</Link></li>
      </ul>
    </div>
  );
}

export default Electronics;
