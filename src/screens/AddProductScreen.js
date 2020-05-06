import React , {useState, useContext} from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {Input} from 'react-native-elements';
import DatePicker from '../components/DatePicker';
import {withNavigation} from 'react-navigation';
import AppContext from '../context/AppContext';

const AddProductScreen = ({navigation}) => {


	return(
	<View>
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

export default withNavigation(AddProductScreen);