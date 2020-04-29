import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Slider } from 'react-native-elements';
import ProductList from '../components/ProductList';

const SearchScreen = () => {
    return(
    <View style={styles.basic} >
    <ProductList title="Products" />
    <ProductList title="Sold" />
    <ProductList title="Orders" />
    <Slider style={styles.slider} />
    </View>
	);
}

const styles = StyleSheet.create({
	slider : {
		borderColor: 'red',
		borderWidth: 2
	},
	basic: {
		flex: 1,
		justifyContent: 'space-between',
		margin: 70
	}

});

export default SearchScreen;