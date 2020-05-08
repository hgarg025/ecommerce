import React , {useState, useContext} from 'react';
import { Button, View, Text, StyleSheet, TextInput, ImageButton, FlatList} from 'react-native';
import {Input} from 'react-native-elements';
import DatePicker from '../components/DatePicker';
import {withNavigation} from 'react-navigation';
import AppContext from '../context/AppContext';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';

const AddProductScreen = ({navigation, category}) => {
  
const {productDetails, setProductDetails} = useContext(AppContext);

const [productName,setProductName] =useState('');
const [productPrice,setProductPrice] =useState('');
const [productQuantity,setProductQuantity] =useState('');
const [productEdate,setProductEdate] =useState('');
const [productCategory, setProductCategory] = useState('');

	return(
    <ScrollView>
        <View>  
        <View style = {{height:200,backgroundColor: 'grey'}}>

        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text>Select picture from</Text>
            <Button title ="Gallery"/>
            <Text> or </Text>
            <Button title = "Camera"/>
        </View>
        
        <Text>Product Name</Text>
        <Input placeholder='Product Name' value={productName} onChangeText={(text) => setProductName(text)} />
        <Text>Category</Text>
        <RNPickerSelect
                onValueChange={(value) => setProductCategory(value)}
                items={[
                    { label: 'category 1', value: 'category 1' },
                    { label: 'category 2', value: 'category 2' },
                    { label: 'category 3', value: 'category 3' },
                    { label: 'category 4', value: 'category 4' },
                        { label: 'category 5', value: 'category 5' },
                ]}
            />
        <Text>Product Price (in Rupees)</Text>
        <Input placeholder='Product Price' keyboardType={'numeric'} value={productPrice} onChangeText={(text) => setProductPrice(text)} />
        <Text>Quantity</Text>
        <Input placeholder='Quantity' keyboardType={'numeric'} value={productQuantity} onChangeText={(text) => setProductQuantity(text)} />
        <Text>Expiry Date</Text>
        <DatePicker productEdate={productEdate} setProductEdate={setProductEdate} />
        <Button title="Submit" onPress = {() => {
            setProductDetails([...productDetails,
            {name : productName, price : productPrice, quantity : productQuantity, edate : productEdate, category : productCategory}
            ])
            navigation.pop()
            }}/>
        
        </View>
    </ScrollView>
    );
}



const styles = StyleSheet.create({
	
});

export default withNavigation(AddProductScreen);