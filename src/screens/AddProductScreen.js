import React , {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image,Button} from 'react-native';
import {Input} from 'react-native-elements';
import DatePicker from '../components/DatePicker';
import ImageSelect from '../components/ImageSelect'
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
    <Button
        title ="Select Picture"
        onPress = {function(){
            navigation.navigate('Camera')
        }}
    />
    
    

    </View>
    );
}

const styles = StyleSheet.create({
	
});

export default withNavigation(AddProductScreen);