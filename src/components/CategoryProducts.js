import React  from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const CategoryProducts = ({title,ProductDetails,navigation}) => {

if(!ProductDetails.length){
    	return null;
    }
 
 	return(
    <View>
    <FlatList 
    horizontal
        showsHorizontalScrollIndicator={false}
    data={ProductDetails}
        keyExtractor={(ProductDetails) => ProductDetails.id}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={ () => navigation.navigate('Edit', { ID : item.id  })}>
            <View>
            <Text>NAME: {item.name}</Text>
            <Text>PRICE: {item.price}</Text>
            <Text>QTY: {item.quantity}</Text>
            <Text>EXPIRY:{item.edate}</Text>
            <Text>ID:{item.id}</Text>
            
            </View>
            </TouchableOpacity>
            );
        }}
    />
    </View>
	);
}

const styles = StyleSheet.create({});

export default withNavigation(CategoryProducts);