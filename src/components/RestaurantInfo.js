import { useCallback, useState } from "react";
import StarRatings from 'react-star-ratings';
import LoadingSkeleton from "./LoadingSkeleton";
import { useParams } from "react-router";
import GoogleMapReact from 'google-map-react';
import { Link } from "react-router-dom";
import SvgIcon from '@material-ui/core/SvgIcon';
import Comment from "./Comment";

const RestaurantInfo = () => {
    const restId=useParams();
    const url='https://wbs-hackathon-backend.herokuapp.com/restaurants/'+restId.restaurantId;
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);

    const loadData=useCallback(()=>{
        setLoading(true);
        fetch(url)
        .then(res=>res.ok&&res.json())
        .then(data=>{
            setData(data);
            setLoading(false);
        })
        .catch(err=>console.log(err))
    },[url]);

    useState(()=>{
        loadData();
    },[loadData]);
    if (loading) return <LoadingSkeleton/>
    return (<>
        <div className='row mt-5'>
            <div className='col-5 mx-auto'>
                <div className='row'>
                    <div className='col'>
                        <h1>{data.name}</h1>
                        <StarRatings rating={data.avRating} starRatedColor="blue" numberOfStars={5} starDimension='15px' starSpacing='0' /> 
                        {data.tags.map((tag,i)=>(
                            <Link className='badge rounded-pill bg-secondary text-decoration-none' key={`tagN${i}`} to={`/tags/${tag.id}`}>{tag.tag}{ }</Link>
                        ))}
                        <img className='d-block' src={data.picture} alt={data.name} />
                        
                        <p>in <Link className='text-decoration-none' to={`/cities/${data.city.id}`}>{data.city.name}</Link></p>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col'>
                        {data.description}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {data.comments.map((comm,i)=><Comment key={`cnmtN${i}`} name={comm.name} rating={comm.rating} comment={comm.comment} />)}
                    </div>
                </div>
            </div>
            <div className='col-5 mx-auto'>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={data.pos}
                defaultZoom={11}>
                <IconOnMap lat={data.pos[0]}lng={data.pos[1]} text={data.name} />
                </GoogleMapReact>
            </div>
        </div>
        
        </>)
}

const IconOnMap = ({ text }) => <div><HomeIcon />{text}</div>;
const HomeIcon=()=><SvgIcon><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>;
export default RestaurantInfo