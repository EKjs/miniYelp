import { Route,Redirect } from "react-router-dom";
//import 'bootstrap/scss/bootstrap.scss';
import SearchBar from "./components/SearchBar";
import Restaurants from "./components/Restaurants";
import RestaurantInfo from "./components/RestaurantInfo";
import Tags from "./components/Tags";
import Navbar from "./components/Navbar";


function App() {
  return (<>
      <Navbar />
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path="/search" component={SearchBar}/> 
      <Route exact path="/restaurants" component={Restaurants}/>
      <Route exact path="/restaurants/:restaurantId" component={RestaurantInfo}/>
      <Route exact path="/tags" component={Tags}/>
      <Route exact path="/tags/:tagId" component={Restaurants}/>
      <Route exact path="/cities" component={Tags}/>
      <Route exact path="/cities/:cityId" component={Restaurants}/>
    </>
  );
}

export default App;

{/*
  <div className="row">
          <div className="col">
          </div>
        </div>
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