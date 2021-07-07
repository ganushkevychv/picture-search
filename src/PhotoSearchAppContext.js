import React, {useState, useEffect, createContext, useMemo} from 'react';
import {getData} from './Api';

const PhotoSearchAppContext = createContext({});

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
        <PhotoSearchAppContext.Provider value={appStateData}>
            {props.children}
        </PhotoSearchAppContext.Provider>
        )
}   
export {PhotoSearchAppContext, PhotoSearchAppContextProvider}