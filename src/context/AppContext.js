import React , { useState} from 'react';

const AppContext = React.createContext();


export const AppProvider = ({children}) => {
 const [productDetails, setProductDetails] = useState([{ name : '', price : '', quantity : '', edate : '', category : ''}]);

 
	return <AppContext.Provider value={{productDetails , setProductDetails}}>
	{children}
	</AppContext.Provider>
}

export default AppContext;