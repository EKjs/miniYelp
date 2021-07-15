import { useCallback, useState } from "react";
import Restaurant from "./Restaurant";
import LoadingSkeleton from "./LoadingSkeleton";
import { Link } from "react-router-dom";

const Tags = () => {
    const url='https://wbs-hackathon-backend.herokuapp.com/tags/';
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);

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
        <div className='col-5 mx-auto'>
            {loading ? <LoadingSkeleton/> : 
            data.map(item=><Link to={`/tags/${item.id}`} className='btn btn-primary' key={`tagK${item.id}`}>{item.tag}</Link>)}
        </div>
    </div>)
}

export default Tags