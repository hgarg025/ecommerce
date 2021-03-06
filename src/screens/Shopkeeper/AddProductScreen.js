import React , {useState, useContext} from 'react';
import { Button, View, Text, StyleSheet, TextInput, ImageButton, FlatList, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import DatePicker from '../../components/Shopkeeper/DatePicker';
import {withNavigation} from 'react-navigation';
import AppContext from '../../context/AppContext';
import RNPickerSelect from 'react-native-picker-select';
import ImagePickerr from '../../components/Shopkeeper/ImagePicker';

const AddProductScreen = ({navigation}) => {
  
const {productDetails, setProductDetails} = useContext(AppContext);
const id = navigation.getParam('id');
const rid = (Math.floor(Math.random() * 99999)).toString()
 
var name = ''
var category = ''
var price = 0
var quantity = 0
var edate = 598051730000
var image = null
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
             image = productDetails[i].image
        }
    }




const [productName,setProductName] =useState(name);
const [productPrice,setProductPrice] =useState(price);
const [productQuantity,setProductQuantity] =useState(quantity);
const [productEdate,setProductEdate] =useState(edate);
const [productCategory, setProductCategory] = useState(category);
const [productImage, setProductImage] = useState(image);

	return(
    <ScrollView style={styles.container}>  
        <Text style={ styles.text}>Add Image</Text>
        < ImagePickerr productImage={productImage} setProductImage={setProductImage}/>  
        <Text style={ styles.text}>Product Name</Text>
        <Input placeholder='Product Name' placeholderTextColor="white" value={productName} onChangeText={(text) => setProductName(text)} />
        <Text style={ styles.text}>Category</Text>
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
        <Text style={ styles.text}>Product Price (in Rupees)</Text>
        <Input placeholder='Product Name' placeholderTextColor="white" keyboardType={'numeric'} value={productPrice.toString()} onChangeText={(text) => setProductPrice(text)} />
        <Text style={ styles.text}>Quantity</Text>
        <Input placeholder='Quantity' placeholderTextColor="white" keyboardType={'numeric'} value={productQuantity.toString()} onChangeText={(text) => setProductQuantity(text)} />
        <Text style={ styles.text}>Expiry Date</Text>
        <View stytle={styles.date}>
        <DatePicker productEdate={productEdate} setProductEdate={setProductEdate} />
        </View>
        <View style={styles.submit}>
        <Button title="Submit" onPress = {() => {
     
            if(flag) {
            setProductDetails(productDetails.map( function (item) { return item.id === id ? {name : productName, price : productPrice, quantity : productQuantity, edate : productEdate, category : productCategory, id : id, image : productImage } : item } ));
        }
            else {
            setProductDetails([...productDetails,
            {name : productName, price : productPrice, quantity : productQuantity, edate : productEdate, category : productCategory, id : rid, image : productImage }
            ])
        }
            navigation.navigate('Products')
            }}/>
            </View>
    </ScrollView>
    );
}

AddProductScreen.navigationOptions = function({navigation}){

    return {
        title: 'Product Details',
        headerStyle: 
        {
            
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle:
           {
            fontWeight: 'bold',
          }        

    }
}

const styles = StyleSheet.create({
container :{
    backgroundColor : 'orange'
}	,
text : {
    fontSize : 20,
    fontWeight : "bold",
    margin : 5
},
submit : {
    marginHorizontal :30,
    marginVertical : 20,
    borderWidth : 10,
    borderRadius : 5,
    borderColor : '#f4511e'
}
});


export default withNavigation(AddProductScreen);