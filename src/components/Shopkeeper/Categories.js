import React , {useState, useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import { withNavigation } from 'react-navigation';

import CategoryProducts from './CategoryProducts';
import AppContext from '../../context/AppContext';

const Categories = ({title, navigation}) => {
    const {productDetails, setProductDetails} = useContext(AppContext);

const filterResultsByCategories = (title) => {
   return productDetails.filter(productDetails => {
   return productDetails.category === title   
   })   
};

    return(
    <View style={styles.container}>  
    <View style={styles.components}>
    <Text style={styles.title}>{title}</Text> 
    <TouchableOpacity onPress={ () => navigation.navigate('AddProduct')}>
    <AntDesign name="pluscircle" size={35}/>
    </TouchableOpacity>
    </View>
    <CategoryProducts ProductDetails={filterResultsByCategories(title)} category={title}/>
    </View>
    );
}

const styles = StyleSheet.create({
    components: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection : 'row',
        borderColor : '#f4511e',
      borderWidth : 3,
      padding : 10,
      marginBottom : 10
  },
  container : {
      
      margin : 10
  },
  title : {
      fontSize : 25,
      fontWeight : "bold"
  }
});

export default withNavigation(Categories);