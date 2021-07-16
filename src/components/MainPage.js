import SearchBox from "./SearchBox";
import './App.css';

const MainPage = () => {
    return (
        <div style={{ backgroundImage: `url("./images/bk.jpg"`, width:'100%',height:'100%' }}>
            <div className="first row d-flex justify-content-center ">
                <div className="col-md-12 mt-5 d-flex justify-content-center " >
                    <img src="/images/yelp.png" alt="yelp" />
                </div>
            </div>
            <div className="second row justify-content-center ">
             <SearchBox page='main'/>
            </div >
            <div>
                <p className="third-row d-flex justify-content-center mt-5">Find your favourite food in the City</p>
            </div>
        </div>
    )
}

export default MainPage