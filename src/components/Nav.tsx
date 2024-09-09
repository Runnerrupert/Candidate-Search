import { Link, useLocation } from "react-router-dom";
import "../index.css";

const Nav = () => {

    const currentPage = useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div className="nav">
      <ul className="nav">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >Home</Link>
        </li>
        <li className="nav-item">
          <Link
            to="/SavedCandidates"
            className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}
            >Potential Candidates</Link>
        </li>
      </ul>
    </div>
  )
};

export default Nav;
