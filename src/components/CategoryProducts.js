import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CategoryProducts = ({pname}) => {
	return(
    <View>
    <Text>{pname}</Text>
    </View>
	);
}

const styles = StyleSheet.create({});

export default CategoryProducts;