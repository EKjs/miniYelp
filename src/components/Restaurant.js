import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";

const Restaurant = ({id,name,cityId,city,avRating,commentsCount,pic}) =>{
    if (!avRating || Number.isNaN(avRating))avRating=0
    return (
        <div className='row mt-3'>
            <div className='col'>
                <Link className='text-decoration-none' to={`/restaurants/${id}`}><h1>{name}</h1></Link>
                <p>in <Link className='text-decoration-none' to={`/cities/${cityId}`}>{city}</Link></p>
                    <StarRatings rating={avRating} starRatedColor="blue" numberOfStars={5} starDimension='15px' starSpacing='0' />
                <h3>Rating: {avRating}</h3>
                <p><Link className='text-decoration-none' to={`/restaurants/${id}`}>{commentsCount}</Link> comments</p>
            </div>
            <div className='col'>
                <Link  to={`/restaurants/${id}`}>
                    {pic ? <img style={{width:'300px', height:'auto'}} src={pic} alt={name} /> :  <img style={{width:'300px', height:'auto'}} src="/images/noimg.jpg" className="d-block" alt="Unavalible"/>}
                    </Link>
            </div>
        </div>
    )
}

export default Restaurant