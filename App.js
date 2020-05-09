import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/Shopkeeper/HomeScreen';
import ProductScreen from './src/screens/Shopkeeper/ProductScreen';
import SoldScreen from './src/screens/Shopkeeper/SoldScreen';
import OrderScreen from './src/screens/Shopkeeper/OrderScreen';
import AddProductScreen from './src/screens/Shopkeeper/AddProductScreen';
import {AppProvider} from './src/context/AppContext';
import ImageSelect from './src/components/Shopkeeper/ImageSelect'
import IndexScreen from './src/screens/IndexScreen'
import CustomerScreen from './src/screens/Customer/CustomerScreen'
import ShopList from './src/screens/Customer/ShopList'
import ByProduct from './src/screens/Customer/ByProduct'
import ProductDetail from './src/screens/Customer/ProductDetail'
import ShopDetail from './src/screens/Customer/ShopDetail'
import CartScreen from './src/screens/Customer/CartScreen'
import EditScreen from './src/screens/Shopkeeper/EditScreen'
const navigator = createStackNavigator(
{
   Home : HomeScreen,
   Products : ProductScreen,
   Sold : SoldScreen,
   Orders : OrderScreen,
   AddProduct : AddProductScreen,
   Camera: ImageSelect,
   Customer: CustomerScreen,
   Index: IndexScreen,
   Shops: ShopList,
   ByProd: ByProduct,
   ShopD: ShopDetail,
   ProductD: ProductDetail,
   Cart: CartScreen,
   Edit : EditScreen
 
},
{
   initialRouteName: 'Index',
   defaultNavigationOptions: {
    title: 'CSK 2010 2011 2018'
   }
}
  );


const App = createAppContainer(navigator);

export default () => {
  return <AppProvider>
  <App />
  </AppProvider>
};

