import React, { useContext } from 'react'
import Input from '../components/Input'
import {PhotoSearchAppContext} from "../PhotoSearchAppContext";


const SearchPage = () => {
      
const {setSearchValue} = useContext(PhotoSearchAppContext) ;

return(
    <div>
    <div className="containerApp">
      <h1 className="headerTitle">Unsplash</h1>
      <p className="headerSlogan">The internet's source of<a className="headerSloganLink" href="https://unsplash.com/license"> freely-usable images.</a><br/>Powered by creators everywhere.</p>
      <Input searchValueHandler={setSearchValue}/>
     <p className="headerTrending">Trending: flower, wallpapers, backgrounds, happy, love</p>
 </div>
 </div>
)

}
export default SearchPage;