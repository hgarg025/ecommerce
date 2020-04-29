import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ProductScreen from './src/screens/ProductScreen';
import SoldScreen from './src/screens/SoldScreen';
import OrderScreen from './src/screens/OrderScreen';

const navigator = createStackNavigator(
{
   Search : SearchScreen,
   Product : ProductScreen,
   Sold : SoldScreen,
   Order : OrderScreen
},
{
   initialRouteName: 'Search',
   defaultNavigationOptions: {
    title: 'CSK 2010 2011 2018'
   }
}
  );

export default createAppContainer(navigator);
