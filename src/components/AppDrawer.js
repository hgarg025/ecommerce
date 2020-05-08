import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import ProductDetail from '../screens/ProductDetail'
const DrawerNavigator = createDrawerNavigator(
    {
      Home: ProductDetail,
    },
    {
      drawerBackgroundColor: 'rgba(255,255,255,.9)',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#6b52ae',
      },
    }
  );
  
  export default createAppContainer(DrawerNavigator);