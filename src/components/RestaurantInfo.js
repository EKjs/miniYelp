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
    const [err,setErr]=useState(false);

    const loadData=useCallback(()=>{
        setLoading(true);
        fetch(url)
        .then(res=>res.ok&&res.json())
        .then(data=>{
            console.log(data);
            setData(data);
            setLoading(false);
        })
        .catch(err=>{
            setErr(true);
            setLoading(false);
            console.log(err)})
    },[url]);

    useState(()=>{
        loadData();
    },[loadData]);
    if (err)return <h3>Error while trying to get data from server.</h3>
    if (loading) return <LoadingSkeleton/>
    return (<>
        <div className='row mt-5'>
            <div className='col-5 mx-auto'>
                <div className='row'>
                    <div className='col'>
                        <h1>{data.restaurant_name}</h1>
                        {data.avRating ? 
                        <StarRatings rating={data.avRating} starRatedColor="blue" numberOfStars={5} starDimension='15px' starSpacing='0' /> :
                        "Not rated yet "
                        }
                        {data.tags ? data.tags.map((tag,i)=>(
                            <Link className='badge rounded-pill bg-secondary text-decoration-none' key={`tagN${i}`} to={`/tags/${tag.id}`}>{tag.name}{ }</Link>
                        )) :
                        "Not tags set yet "
                        }
                        {data.picture ? <img className='d-block' src={data.picture} alt={data.restaurant_name} style={{maxWidth:'500px', height:'auto'}} /> : 
                        <img style={{maxWidth:'500px', height:'auto'}}  src="/images/noimg.jpg" className="d-block" alt="Unavalible"/>
                        }
                        <p>in <Link className='text-decoration-none' to={`/cities/${data.city_id}`}>{data.city_name}</Link></p>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col'>
                        {data.description}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {data.comments ? data.comments.map((comm,i)=><Comment key={`cnmtN${i}`} name={comm.name} rating={comm.rating} comment={comm.text} date={comm.date} />) :
                        "No comments yet "
                        }
                    </div>
                </div>
            </div>
            <div className='col-5 mx-auto'>
                {data.lan && data.lat ? 
                <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={[data.lat ,data.lan]}//data.lan,data.lat
                defaultZoom={11}>
                <IconOnMap lat={data.lat} lng={data.lan} text={data.restaurant_name} />
                </GoogleMapReact>
                :
                "No coodinates"
                }
            </div>
        </div>
        
        </>)
}

const IconOnMap = ({ text }) => <div><HomeIcon />{text}</div>;
const HomeIcon=()=><SvgIcon><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>;
export default RestaurantInfo