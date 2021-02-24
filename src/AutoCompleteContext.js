import React, {useState, createContext} from 'react'

export const AutoCompleteContext = createContext();

export const AutoCompleteProvider = props => {

    const [autoComplete, setAutoComplete] = useState([
 
        { title: 'cat'},
        { title: "beach"},
        { title: "people"},
        { title: "island"},
        { title: "sunset"},
        { title: "sunrise"},
    ])
    return(
        <AutoCompleteContext.Provider value={[autoComplete,setAutoComplete]}>
        {props.children}
    </AutoCompleteContext.Provider>
)
} 