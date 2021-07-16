import { useCallback, useState } from "react";
import Restaurant from "./Restaurant";
import LoadingSkeleton from "./LoadingSkeleton";

const Restaurants = ({match}) =>{
    let url;
    let text;
    if (match.path.startsWith('/restaurants')){
        url='https://wbs-hackathon-backend.herokuapp.com/restaurants/';
        text='restaurants';
    }else if (match.path.startsWith('/tags')){
        url=`https://wbs-hackathon-backend.herokuapp.com/tags/${match.params.tagId}`;
        text='tag '+match.params.tagId;
    }else if (match.path.startsWith('/cities')){
        url=`https://wbs-hackathon-backend.herokuapp.com/cities/${match.params.cityId}`;
        text='cityId '+match.params.cityId;
    }else if (match.path.startsWith('/search')){
        url=`https://wbs-hackathon-backend.herokuapp.com/search/${match.params.searchQuery}`;
        text='searching '+match.params.searchQuery;
    }
    const [err,setErr]=useState(false);
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);
    console.log(text);

    const loadData=useCallback(()=>{
        setLoading(true);
        console.log('fetching url', url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log('Got data >',data);
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
    return (
    <div className='row'>
        <div className='col-8 mx-auto'>
            {loading ? <LoadingSkeleton/> : data.map(item=><Restaurant key={item.id} id={item.id} name={item.restaurant_name} tags={item.tags} desc={item.description} cityId={item.city_id} city={item.city_name} avRating={item.avRating} commentsCount={item.comments.length} pic={item.picture} />)}
        </div>
    </div>)
}

export default Restaurants