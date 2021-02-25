import React, {useContext} from 'react';
import '../styles/PhotoSearchApp.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {AutoCompleteContext} from '../AutoCompleteContext';


const InputSearch = () => {

    const [autoComplete, setAutoComplete] = useContext(AutoCompleteContext);

return(
  <div>
     <div className="containerApp">
       <h1 className="headerTitle">Unsplash</h1>
       <p className="headerSlogan">The internet's source of<a className="headerSloganLink" href="https://unsplash.com/license"> freely-usable images.</a><br/>Powered by creators everywhere.</p>
       <div style={{ width: 300, height: 100 }}>
      <Autocomplete
        freeSolo
        disableClearable
        options={autoComplete.map((option) => option.title)}
        renderInput={(params) => (
          <TextField      
            {...params}
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
            placeholder="Search free high-resolution photos"
          />
        )}
      />
      <button>Search</button>
    </div>
       
      <p className="headerTrending">Trending: flower, wallpapers, backgrounds, happy, love</p>
  </div>
  </div>
)
}
export default InputSearch;