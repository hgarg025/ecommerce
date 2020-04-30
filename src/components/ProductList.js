import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import { withNavigation } from 'react-navigation';
import SoldScreen from '../screens/SoldScreen';
import OrderScreen from '../screens/OrderScreen';
//comment

const ProductList = ( {title, navigation}) => {

    const screendecider = (title) => {
      if(title == 'Products')
      {
      	navigation.navigate('Product');
      }
      else if(title == 'Sold')
      {
      	navigation.navigate('Sold');
      }
      else 
      	navigation.navigate('Order');
    };

	return(
    <View style={styles.components} >
    <TouchableOpacity onPress ={() => screendecider(title)} >
    <Text style={styles.matter} >{title}</Text>
    </TouchableOpacity>
    </View>
	);
};

const styles = StyleSheet.create({
  components: {
  	flex:1,
  	justifyContent: 'center',
  	borderColor: 'black',
		borderWidth: 2,
		margin: 20
  },
  matter: {
   fontSize: 65,
   margin: 20
  }
});

export default withNavigation(ProductList);