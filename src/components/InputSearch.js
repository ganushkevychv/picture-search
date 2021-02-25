import React, {useContext} from 'react';

const InputSearch = () => {
  
return(
  <div>
     <div className="containerApp">
       <h1 className="headerTitle">Unsplash</h1>
       <p className="headerSlogan">The internet's source of<a className="headerSloganLink" href="https://unsplash.com/license"> freely-usable images.</a><br/>Powered by creators everywhere.</p>
       <div style={{ width: 300, height: 100 }}>
      <input type="text" placeholder="Search free high-resolution photos"/>
      <button>Search</button>
    </div>
       
      <p className="headerTrending">Trending: flower, wallpapers, backgrounds, happy, love</p>
  </div>
  </div>
)
}
export default InputSearch;