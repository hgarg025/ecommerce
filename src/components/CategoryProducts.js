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
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.edate}</Text>
            <Text>{item.id}</Text>
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