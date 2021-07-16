import { useState } from "react";
const SearchBox = ({page}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const inputChange = (e) => {
        setSearchQuery(e.target.value)
    }
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(searchQuery);
    }

    const bsClasses=page==='main' ? 'd-flex col-md-4 mt-3 pl-5' : 'd-flex';
    
    return (
        <form className={bsClasses} onSubmit={formSubmit}>
            <input type='form-control me-2' className='form-control'  onChange={inputChange} placeholder='Burgers, Veggie, Non-veggie' aria-label="Search" />
            <input type='submit' className='btn btn-outline-success' value='Search' />
        </form>
    )
}

export default SearchBox