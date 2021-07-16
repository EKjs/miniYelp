import { useState } from "react";
import { useHistory } from "react-router-dom";
const SearchBox = ({page}) => {
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');
    const inputChange = (e) => {
        setSearchQuery(e.target.value)
    }
    const formSubmit = (e) => {
        history.push(`/search/${searchQuery}`);
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