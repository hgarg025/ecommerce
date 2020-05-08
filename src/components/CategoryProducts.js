import React  from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';


const CategoryProducts = ({title,ProductDetails}) => {

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
            <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.edate}</Text>
            </View>
            );
        }}
    />
    </View>
	);
}

const styles = StyleSheet.create({});

export default CategoryProducts;