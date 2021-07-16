import { NavLink,useLocation } from "react-router-dom";
import SearchBox from "./SearchBox";
import { Carousel } from "bootstrap"; //without this line JS-BS doesn't work, even thou it's not used

function Navbar() {
    new Carousel();
    const curPage=useLocation();
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        {!curPage.pathname.startsWith('/main') &&
          <NavLink className="navbar-brand" to="/"><img style={{maxWidth:'100px',height:'auto'}} src="/images/yelp.png" alt="Mini-Yelp" /></NavLink>}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/main">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/restaurants">Restaurants</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/cities">Cities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/tags">Tags</NavLink>
              </li>
            </ul>
            {!curPage.pathname.startsWith('/main') && !curPage.pathname.startsWith('/search') &&
                <SearchBox />
            }
          </div>
        </div>
      </nav>
  )
}

export default Navbar
