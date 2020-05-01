import React from 'react';
import { ScrollView, Text, StyleSheet} from 'react-native';
import Categories from '../components/Categories';
const ProductScreen = () => {
	return(
    <ScrollView>
    <Categories title = "category 1"/>
    <Categories title = "category 2"/>
    <Categories title = "category 3"/>
    <Categories title = "category 4"/>
    <Categories title = "category 5"/>
    </ScrollView>
	);
}

const styles = StyleSheet.create({

});

export default ProductScreen;