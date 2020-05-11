import React , { useState} from 'react';


const AppContext = React.createContext();


export const AppProvider = ({children}) => {
 	const [productDetails, setProductDetails] = useState([{ name : 'Lays', price : '20', quantity : '10', edate : '', category : '1', id : '1', image : '../../assets/splash.png'}]);
	const [purchaseDetails, setPurchaseDetails] = useState([])
 
	return <AppContext.Provider value={{productDetails , setProductDetails,purchaseDetails,setPurchaseDetails}}>
	{children}
	</AppContext.Provider>
}

export default AppContext;