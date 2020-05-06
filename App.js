import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import SoldScreen from './src/screens/SoldScreen';
import OrderScreen from './src/screens/OrderScreen';
import AddProductScreen from './src/screens/AddProductScreen';
import {AppProvider} from './src/context/AppContext';

const navigator = createStackNavigator(
{
   Home : HomeScreen,
   Products : ProductScreen,
   Sold : SoldScreen,
   Orders : OrderScreen,
   AddProduct : AddProductScreen
},
{
   initialRouteName: 'Home',
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
