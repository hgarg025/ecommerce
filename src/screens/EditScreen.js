import React , {useContext} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const EditScreen = ({ID}) => {
	return(
    <View>
    <Text>Product Details </Text>
    <Button title="Edit" />
    <Button title="Delete"/>
    </View>
	);
}

const styles = StyleSheet.create({});

export default EditScreen;