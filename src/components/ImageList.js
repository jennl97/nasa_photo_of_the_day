import React, {useState, useEffect} from "react";
import axios from "axios";

import ImageCard from "./ImageCard";

function ImageList() {
let [data, setData] = useState();

useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=f4awFhhhs5akVcppOoidosrXdLmAWF9eGVfCX0pQ`)
    .then (results => {
        console.log('axios',results);
        setData(results.data);
    })
    .catch(err => {
        console.log(err);
    })
}, [])

return(
    <div>
        <ImageCard data2 = {data}/>
    </div>
)

}

export default ImageList;