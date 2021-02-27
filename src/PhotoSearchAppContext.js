import React, {useState, useEffect, createContext, useMemo} from 'react';
import {getData} from './Api';

const PhotoSearchAppContex = createContext({});

const PhotoSearchAppContextProvider = props => {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([]);

    const appStateData = useMemo(()=>({
        searchValue, setSearchValue,
        data, setData
    }),[
        searchValue, setSearchValue,
        data, setData
    ]);

    useEffect(()=>{
        const data = getData(searchValue)
        setData(data)
    },[searchValue]);

    return (
        <PhotoSearchAppContex.Provider value={appStateData}>
            {props.children}
        </PhotoSearchAppContex.Provider>
        )
}   
export {PhotoSearchAppContex, PhotoSearchAppContextProvider}