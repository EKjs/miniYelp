import { Route,Redirect } from "react-router-dom";
//import 'bootstrap/scss/bootstrap.scss';
import MainPage from "./components/MainPage";
import Restaurants from "./components/Restaurants";
import RestaurantInfo from "./components/RestaurantInfo";
import Tags from "./components/Tags";
import Navbar from "./components/Navbar";


function App() {
  return (<>
      <Navbar />
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
      <Route exact path="/main" component={MainPage}/> 
      <Route exact path="/restaurants" component={Restaurants}/>
      <Route exact path="/restaurants/:restaurantId" component={RestaurantInfo}/>
      <Route exact path="/tags" component={Tags}/>
      <Route exact path="/tags/:tagId" component={Restaurants}/>
      <Route exact path="/cities" component={Tags}/>
      <Route exact path="/cities/:cityId" component={Restaurants}/>
      <Route exact path="/search/:searchQuery" component={Restaurants}/>
    </>
  );
}

export default App;