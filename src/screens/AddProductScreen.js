import React , {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {Input} from 'react-native-elements';
import DatePicker from '../components/DatePicker';

const AddProductScreen = () => {
	return(
    <View>
    <Image />
    <Text>Product Name</Text>
    <Input placeholder='Product Name' />
    <Text>Product Price (in Rupees)</Text>
    <Input placeholder='Product Price' />
    <Text>Quantity</Text>
    <Input placeholder='Quantity' />
    <Text>Expiry Date</Text>
    <DatePicker />
    </View>
    );
}

const styles = StyleSheet.create({
	
});

export default AddProductScreen;