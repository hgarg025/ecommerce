import React , {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 
import { withNavigation } from 'react-navigation';
import AddProduct from '../screens/AddProductScreen';
import CategoryProducts from './CategoryProducts';

const Categories = ({title, navigation}) => {
    const [name,setName]=useState('productname');
    return(
    <View>  
    <View style={styles.components}>
    <Text>{title}</Text> 
    <TouchableOpacity onPress={ () => navigation.navigate('AddProduct')}>
    <AntDesign name="pluscircle" size={20}/>
    </TouchableOpacity>
    </View>
    <CategoryProducts pname={name}/>
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