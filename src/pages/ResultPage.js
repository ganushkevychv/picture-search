import React from 'react'
import Picture from '../components/Picture'
import {PhotoSearchAppContext} from "../PhotoSearchAppContext";

const ResultPage = () => {

    const {data} = useContext(PhotoSearchAppContext);

return(
    <div>
        {data.map((item,index) => {
            <Picture data={item.url} key={index}/>
        }
        )}
    </div>

}
export default ResultPage;