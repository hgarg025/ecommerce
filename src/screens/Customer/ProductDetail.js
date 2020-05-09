import React, {useContext,useState} from 'react'
import {Text,View,StyleSheet,FlatList,TouchableOpacity,Button} from 'react-native'

import {Input} from 'react-native-elements';
import {withNavigation} from 'react-navigation'
import AppContext from '../../context/AppContext'

const ProductDetail = function({navigation}){

    const [qty,setQty] = useState('')
    const [cost,setCost] = useState('')
    const {productDetails , setProductDetails,purchaseDetails,setPurchaseDetails} = useContext(AppContext);

    const blogPost = productDetails.find((blogPost)=> blogPost.id===navigation.getParam('id'))

    return(
        <View>
            <Text>Name: {blogPost.name}</Text>
            <Text>Price: {blogPost.price}</Text>
            <Text>Quantity: {blogPost.quantity}</Text>
           
            <Text>Enter Quantity</Text>
            <Input 
                placeholder='Quantity' 
                keyboardType={'numeric'} 
                value={qty} 
                onChangeText={function(text) { 
                    setQty(text)}} />
            {/* <Text>{qty}</Text> */}
            <Button
                title = "ADD TO CART"
                onPress = {function(){
                    setPurchaseDetails([...purchaseDetails,
                        {   name : blogPost.name, 
                            price : blogPost.price, 
                            quantity : qty, 
                            id : blogPost.id,
                            cost: qty*blogPost.price.toString()
                        }
                    ])
                    setProductDetails(productDetails.map( 
                        function (item) { 
                            return item.id === navigation.getParam('id') ? {
                                name : blogPost.name, 
                                price : blogPost.price, 
                                quantity : (blogPost.quantity-qty).toString(),
                                edate : blogPost.edate, 
                                category : blogPost.category, 
                                id : blogPost.id,
                            } 
                            : item 
                        } ));

                    navigation.pop()
                }}
            />

            
    
        </View>
    )    
}


const styles = StyleSheet.create({

})

export default withNavigation(ProductDetail)