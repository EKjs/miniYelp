import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";

const Restaurant = ({id,name,cityId,city,avRating,commentsCount,pic,desc,tags}) =>{
    if (!avRating || Number.isNaN(avRating))avRating=0
    return (
        <div className='row mt-3'>
            <div className='col'>
                <Link className='text-decoration-none' to={`/restaurants/${id}`}><h1>{name}</h1></Link>
                <StarRatings rating={avRating} starRatedColor="blue" numberOfStars={5} starDimension='20px' starSpacing='0' />
                <p> in <Link className='text-decoration-none' to={`/cities/${cityId}`}>{city}</Link></p>
                {tags ? tags.map((tag,i)=>(
                            <Link className='badge rounded-pill bg-secondary text-decoration-none' key={`tagN${i}`} to={`/tags/${tag.id}`}>{tag.name}{ }</Link>
                        )) :
                        "Not tags set yet "
                        }
                    
                <p>{desc}</p>
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