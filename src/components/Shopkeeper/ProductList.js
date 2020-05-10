import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { withNavigation } from 'react-navigation';

const ProductList = ( {title, navigation}) => {


	return(
    <View style={styles.components} >
      <TouchableOpacity onPress = {function(){
        navigation.navigate(title);
      }}>
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
    margin: 20,
    borderRadius : 20,
    backgroundColor : '#f4511e',
    elevation : 15
    
  },
  matter: {
   fontSize: 60,
   margin: 20,
   textAlign : 'center',
   color : 'white'
  }
});

export default withNavigation(ProductList);