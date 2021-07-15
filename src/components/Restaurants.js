import { useCallback, useState } from "react";
import Restaurant from "./Restaurant";
import LoadingSkeleton from "./LoadingSkeleton";

const Restaurants = ({match}) =>{
    console.log(match);
    let url;
    let text;
    if (match.path=='/restaurants'){
        url='https://wbs-hackathon-backend.herokuapp.com/restaurants/';
        text='restaurants';
    }else if (match.path.startsWith('/tags')){
        url=`https://wbs-hackathon-backend.herokuapp.com/tags/${match.params.tagId}`;
        text='tag '+match.params.tagId;
    }else if (match.path.startsWith('/cities')){
        url=`https://wbs-hackathon-backend.herokuapp.com/cities/${match.params.cityId}`;
        text='cityId '+match.params.cityId;
    }

    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);
    console.log(url,text);

    const loadData=useCallback(()=>{
        setLoading(true);
        fetch(url)
        .then(res=>res.ok&&res.json())
        .then(data=>{
            console.log('Got data',data);
            setData(data);
            setLoading(false);
        })
        .catch(err=>console.log(err))
    },[url]);

    useState(()=>{
        loadData();
    },[loadData]);

    return (
    <div className='row'>
        <div className='col-8 mx-auto'>
            {loading ? <LoadingSkeleton/> : data.map(item=><Restaurant key={item.id} id={item.id} name={item.name} city={item.city} avRating={item.avRating} commentsCount={item.comments.length} pic={item.picture} />)}
        </div>
    </div>)
}

export default Restaurants