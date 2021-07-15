import { useCallback, useState } from "react";
import { Link,NavLink,useLocation } from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';
import { Carousel } from "bootstrap"; //without this line JS-BS doesn't work, even thou it's not used

function Navbar() {
    const curPage=useLocation();
    const url='https://wbs-hackathon-backend.herokuapp.com/tags/';
    const [tags,setTags]=useState();
    const [loading,setLoading]=useState(true);
    const loadData=useCallback(()=>{
        setLoading(true);
        fetch(url)
        .then(res=>res.ok&&res.json())
        .then(data=>{
            console.log('Got data',data);
            setTags(data);
            setLoading(false);
        })
        .catch(err=>console.log(err))
    },[url]);

    useState(()=>{
        loadData();
    },[loadData]);

    if (loading) return <h1><Skeleton variant="text" animation="wave" /></h1>

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Mini-Yelp</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/search">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/restaurants">Restaurants</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/cities">Cities</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/tags" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tags
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/tags">All tags</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  {tags.map((t,i)=><li key={`keyTag${i}`}><Link className="dropdown-item" to={`/tags/${t.id}`}>{t.tag}</Link></li>)}
                </ul>
              </li>
            </ul>
            {!curPage.pathname.startsWith('/search') &&
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            }
          </div>
        </div>
      </nav>
  )
}

export default Navbar
