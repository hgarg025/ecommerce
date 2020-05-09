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
    <View>  
    <View style={styles.components}>
    <Text>{title}</Text> 
    <TouchableOpacity onPress={ () => navigation.navigate('AddProduct')}>
    <AntDesign name="pluscircle" size={20}/>
    </TouchableOpacity>
    </View>
    <CategoryProducts ProductDetails={filterResultsByCategories(title)} category={title}/>
    </View>
    );
}

const styles = StyleSheet.create({
    components: {
        margin: 10,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection : 'row'
  }
});

export default withNavigation(Categories);