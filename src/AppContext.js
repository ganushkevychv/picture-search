import React, {createContext, useState, useEffect, useMemo} from 'react'
import {getData} from './Api';

const AppContext = createContext({});

const AppContextProvider = props => {
    
const [searchValue, setsearchValue] = useState("");
const [photos, setPhotos] = useState([]);

const appStateData = useMemo(()=>({
    searchValue, setsearchValue,
    photos, setPhotos
}),[
    searchValue, setsearchValue,
    photos, setPhotos
]);
    useEffect(()=>{
    const data = getData(searchValue);
    setPhotos(data)
    },[searchValue]);
       
return (
<AppContext.Provider value={appStateData}>
    {props.children}
</AppContext.Provider>
)
}
export {AppContext, AppContextProvider}