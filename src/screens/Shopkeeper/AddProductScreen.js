import React , {useState, useContext} from 'react';
import { Button, View, Text, StyleSheet, TextInput, ImageButton, FlatList, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import DatePicker from '../../components/Shopkeeper/DatePicker';
import {withNavigation} from 'react-navigation';
import AppContext from '../../context/AppContext';
import RNPickerSelect from 'react-native-picker-select';
import ProductDetail from '../Customer/ProductDetail';

const AddProductScreen = ({navigation}) => {
  
const {productDetails, setProductDetails} = useContext(AppContext);
const id = navigation.getParam('id');
const rid = (Math.floor(Math.random() * 99999)).toString()
 
var name = ''
var category = ''
var price = ''
var quantity = ''
var edate = 598051730000
var flag = 0;

for(let i=0;i<productDetails.length;i++)
    {
        if(productDetails[i].id == id)
        {
            flag=1
             name = productDetails[i].name
             category = productDetails[i].category
             price = productDetails[i].price
             quantity = productDetails[i].quantity
             edate = productDetails[i].edate
        }
    }




const [productName,setProductName] =useState(name);
const [productPrice,setProductPrice] =useState(price);
const [productQuantity,setProductQuantity] =useState(quantity);
const [productEdate,setProductEdate] =useState(edate);
const [productCategory, setProductCategory] = useState(category);

	return(
    <ScrollView>       
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
        <Input placeholder='Product Name' keyboardType={'numeric'} value={productPrice} onChangeText={(text) => setProductPrice(text)} />
        <Text>Quantity</Text>
        <Input placeholder='Quantity' keyboardType={'numeric'} value={productQuantity} onChangeText={(text) => setProductQuantity(text)} />
        <Text>Expiry Date</Text>
        <DatePicker productEdate={productEdate} setProductEdate={setProductEdate} />
        <Button title="Submit" onPress = {() => {
     
            if(flag) {
            setProductDetails(productDetails.map( function (item) { return item.id === id ? {name : productName, price : productPrice, quantity : productQuantity, edate : productEdate, category : productCategory, id : id } : item } ));
        }
            else {
            setProductDetails([...productDetails,
            {name : productName, price : productPrice, quantity : productQuantity, edate : productEdate, category : productCategory, id : rid }
            ])
        }
            navigation.navigate('Products')
            }}/>
    </ScrollView>
    );
}



const styles = StyleSheet.create({
	
});

export default withNavigation(AddProductScreen);