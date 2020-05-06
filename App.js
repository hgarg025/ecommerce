import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import SoldScreen from './src/screens/SoldScreen';
import OrderScreen from './src/screens/OrderScreen';
import AddProductScreen from './src/screens/AddProductScreen';
import ImageSelect from './src/components/ImageSelect'
import IndexScreen from './src/screens/IndexScreen'
import CustomerScreen from './src/screens/CustomerScreen'
import ShopList from './src/screens/ShopList'
import ByProduct from './src/screens/ByProduct'
import ProductDetail from './src/screens/ProductDetail'
import ShopDetail from './src/screens/ShopDetail'
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
   ProductD: ProductDetail

 
},
{
   initialRouteName: 'Index',
   defaultNavigationOptions: {
    title: 'CSK 2010 2011 2018'
   }
}
  );

//   export default function(){

//       return <HomeScreen/>
//   }
export default createAppContainer(navigator);
