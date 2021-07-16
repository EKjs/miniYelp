import { useCallback } from "react";
import { useState,useEffect } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AddData = () => {
    const baseUrl='https://wbs-hackathon-backend.herokuapp.com/';
    const urlCities=baseUrl+'cities';
    const urlTags=baseUrl+'tags';
    const urlRestaurants=baseUrl+'restaurants';

    const [cities,setCities]=useState(null);
    const [tags,setTags]=useState(null);

    const [tagText,setTagText]=useState();
    const [cityName,setCityName]=useState();
    const [restaurantData,setRestaurantData]=useState({name:'',description:'',lan:0,lat:0,city:0,tags:[],picture:''});
    let selectedTags=new Set();

    const tagsClick = (e) => {
        if (selectedTags.has(e.target.value))selectedTags.delete(e.target.value)
        else selectedTags.add(e.target.value)
    }

    const sendData=async(url,bodyData)=>{
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(bodyData) // body data type must match "Content-Type" header
          });
          return await response.json();
    }
    const addTag=()=>{
        sendData(urlTags,{name:tagText}).then(data=>console.log(data))
    }
    const addCity=()=>{
        sendData(urlCities,{name:cityName}).then(data=>console.log(data))
    }
    const addNewRestaurant=()=>{

        const newInfo={
            name:restaurantData.name,
            description:restaurantData.description,
            picture:restaurantData.picture,
            lan:parseFloat(restaurantData.lan),
            lat:parseFloat(restaurantData.lat),
            city:parseInt(restaurantData.city),
            tags:[...selectedTags],
        }
        sendData(urlRestaurants,newInfo).then(data=>console.log(data))
    }

    const changeRestaurantData=(e)=>{
        setRestaurantData(prev=>{
            prev[e.target.name]=e.target.value;
            return prev
        })
        console.log(restaurantData);
    }

    const getData=async(url)=>{
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        return data
    }
    const getCitiesAndTags = useCallback(async()=>{
        const newTags=await getData(urlTags);
        const newCities=await getData(urlCities)
        setTags(newTags);
        setCities(newCities);
    },[urlTags,urlCities])
    

    useEffect(()=>{getCitiesAndTags()},[getCitiesAndTags]);

    if (!cities) return <>Loading</>
    return (
        <div className='row mt-3'>
            <div className='col-8 mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Add tag</Tab>
                    <Tab>Add city</Tab>
                    <Tab>Add restaurant</Tab>
                </TabList>

                <TabPanel>
                    <h2>Add a new tag</h2>
                    <input type='text' placeholder='input new tag here' onChange={(e)=>setTagText(e.target.value)} />
                    <button onClick={addTag}>Send</button>
                </TabPanel>
                <TabPanel>
                    <h2>Add a new city</h2>
                    <input type='text' placeholder='input new tag here' onChange={(e)=>setCityName(e.target.value)} />
                    <button onClick={addCity}>Send</button>
                </TabPanel>
                <TabPanel>
                    <h2>Add a new restaurant</h2>
                    <div className='row'>
                        <div className='col'>
                            <input type='text' placeholder='Restaurant name' name='name' onChange={changeRestaurantData} /> <br/>
                            <input type='text' placeholder='Restaurant description' name='description' onChange={changeRestaurantData} /> <br/>
                            <input type='text' placeholder='Restaurant photo URL' name='picture' onChange={changeRestaurantData} /> <br/>
                            <input type='text' placeholder='Restaurant coords lan' name='lan' onChange={changeRestaurantData} /> <br/>
                            <input type='text' placeholder='Restaurant coords lat' name='lat' onChange={changeRestaurantData} /> <br/>
                            <select name='city' onChange={changeRestaurantData} >
                                {cities.map(city=>(
                                    <option key={`cityk${city.id}`}  value={city.id} >{city.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col'>
                        {tags.map(tag=>(
                            <><input type="checkbox" key={`tagk${tag.id}`} onChange={tagsClick} value={tag.id}/>{tag.name}{ }<br/></>
                        ))}
                        </div>
                    </div>
                     
                        
                    <button onClick={addNewRestaurant}>Send</button>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    )
}

export default AddData