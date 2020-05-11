import React  from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

const CategoryProducts = ({title,ProductDetails,navigation}) => {

if(!ProductDetails.length){
    	return null;
    }
 
 	return(
    <View style={styles.container}>
    <FlatList 
    horizontal
        showsHorizontalScrollIndicator={false}
    data={ProductDetails}
        keyExtractor={(ProductDetails) => ProductDetails.id}
        renderItem={({ item }) => {
            return (
        <TouchableOpacity onPress={ () => navigation.navigate('Edit', { ID : item.id  })}>
            <View style={styles.results}>
                <Image source={{ uri : item.image}} style={{ width: 300, height: 250 }} />
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.price}</Text>
                <Text style={styles.text}>{item.quantity}</Text>
                <Text style={styles.text}>{item.edate}</Text>
                <Text style={styles.text}>{item.id}</Text>
            </View>
        </TouchableOpacity>
            );
        }}
    />
    </View>
	);
}

const styles = StyleSheet.create({
    container : {
        borderColor : '#f4511e',
      borderWidth : 2,
      padding : 15,
    },
    results : {
        marginHorizontal : 10
    },
    text : {
        fontSize : 15,
        fontWeight : "bold",
        marginBottom : 5
    }
});

export default withNavigation(CategoryProducts);