import React , { useState} from 'react';

const CustomerContext = React.createContext();


export const CustomerProvider = ({children}) => {
 const [productpurchased, setProductPurchased] = useState([{ name : 'Lays', price : '20', quantity : '10', edate : '', category : '1', id : '1'}]);

 
	return <AppContext.Provider value={{productDetails , setProductDetails}}>
	{children}
	</AppContext.Provider>
}

export default CustomerProvider;
