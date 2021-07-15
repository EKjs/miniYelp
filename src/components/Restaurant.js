import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";

const Restaurant = ({id,name,city,avRating,commentsCount}) =>{
    return (
        <div className='row'>
            <div className='col'>
                <Link className='text-decoration-none' to={`/restaurants/${id}`}><h1>{name}</h1></Link>
                <p>in <Link className='text-decoration-none' to={`/cities/${city.id}`}>{city.name}</Link></p>
                    <StarRatings rating={avRating} starRatedColor="blue" numberOfStars={5} starDimension='15px' starSpacing='0' />
                <h3>Rating: {avRating}</h3>
                <p><Link className='text-decoration-none' to={`/restaurants/${id}`}>{commentsCount}</Link> comments</p>
            </div>
        </div>
    )
}

export default Restaurant