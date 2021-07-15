import { useState } from "react";
import './App.css';




const SearchBar = () => {
    const bk = './images/bk.jpg'
    const [searchQuery, setSearchQuery] = useState('');
    const formSubmit = (e) => {
        e.preventDefault();
    }
    return (


        <div style={{ backgroundImage: `url("${bk}"` }}>



            <div className="first row d-flex justify-content-center ">
                <div className="col-md-12 mt-5 d-flex justify-content-center " >

                    <img src="/images/yelp.png" alt="yelp" />
                </div>
            </div>
            <div className="second row justify-content-center ">
                <form className='d-flex col-md-4 mt-3 pl-5' onSubmit={formSubmit}>
                    <input type='text' className='form-control' name='searchQuery' onChange={(e) => setSearchQuery(e.target.value)} placeholder='Burgers, Veggie, Non-veggie' />
                    <input type='submit' className='btn btn-secondary' value='Search' />
                </form>
            </div >
            <div>
                <p className="third-row d-flex justify-content-center mt-5">Find your favourite food in the City</p>
            </div>
        </div>
    )
}

export default SearchBar