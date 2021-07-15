import StarRatings from 'react-star-ratings';

const Comment = ({name,rating,comment}) =>{
    return (
        <div className='mt-3'>
            <p className='text-secondary'>Commented by {name}:</p>
            <p>{comment}</p>
            <StarRatings rating={rating} starRatedColor="blue" numberOfStars={5} starDimension='15px' starSpacing='0' />
        </div>
    )
}

export default Comment