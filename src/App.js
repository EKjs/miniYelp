import { Route } from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss';
import SearchBar from "./components/SearchBar";

function App() {
  return (
        <div className="row">
          <div className="col-2">
            <SearchBar />
            <button className="btn btn-secondary">Search</button>
          </div>
        </div>
  );
}

export default App;

{/*
<Route exact path="/" component={}/> 
<Route exact path="/restaurants" component={Restaurant}/>
<Route exact path="/restaurants/:restaurantId" component={Restaurants}/>

<Route exact path="/tags" component={Tags}/>
<Route exact path="/tags/:tagId" component={Tag}/>

<Route exact path="/cities" component={Cities}/>
<Route exact path="/cities/:tagId" component={City}/>

import { Link } from "react-router-dom";
<Link to={`/restaurants/${id}`}>
  blabla
</Link>
*/}