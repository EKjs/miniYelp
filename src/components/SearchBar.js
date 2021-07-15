import { useState } from "react";

const SearchBar = () =>{
    const [searchQuery,setSearchQuery]=useState('');
    const formSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <form className='d-flex' onSubmit={formSubmit}>
            <input type='text' className='form-control' name='searchQuery' onChange={(e)=>setSearchQuery(e.target.value)} placeholder='steak or salad' />
            <input type='submit' className='btn btn-secondary' value='Search' />
        </form>
    )
}

export default SearchBar