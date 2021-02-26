import React, {useState, useEffect} from 'react';
import {getData} from './Api';

const PhotoSearchAppContext = () => {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([]);

    useEffect(()=>{
        const data = getData(searchValue)
        setData(data)
    },[searchValue]);
}   
export {PhotoSearchAppContext}