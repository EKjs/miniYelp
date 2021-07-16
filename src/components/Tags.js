import { useCallback, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { Link } from "react-router-dom";

const Tags = ({match}) => {
    const url=match.path.startsWith('/tags') ? 'https://wbs-hackathon-backend.herokuapp.com/tags/' : 'https://wbs-hackathon-backend.herokuapp.com/cities/';
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
            data.map(item=><Link to={match.path.startsWith('/tags') ? `/tags/${item.id}` : `/cities/${item.id}`} className='btn btn-primary' key={`tagK${item.id}`}>{item.name}</Link>)}
        </div>
    </div>)
}

export default Tags