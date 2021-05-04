import {useContext, createContext, useState} from 'react';



const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [values, setValues] = useState({})

    function updateValues(e){
        console.log(e.target.value);
        setValues({...values,[e.target.name] :e.target.value})
    }


return(
    <AppContext.Provider value = {{ updateValues,values}}>
        {children}
    </AppContext.Provider>
)
}
const useAppContext = () =>useContext(AppContext) 
export {useAppContext,
    AppProvider
}