import React,{useContext,useState,useReducer} from 'react'
import {Text,View, StyleSheet, Button} from 'react-native'
import { Feather } from '@expo/vector-icons'; 

import AppContext from '../../context/AppContext'

const QuantityCounter = function({id,quant}){

    const [qty,setQty] = useState(quant)
    const {productDetails , setProductDetails,purchaseDetails,setPurchaseDetails} = useContext(AppContext);
    const blogPost = productDetails.find((blogPost)=> blogPost.id===id)
    const maxQuantity = blogPost.quantity
    

    // console.log('Cart',quant)
    // console.log('Stored:',blogPost.quantity)
    // console.log('Max:', maxQuantity)
    // console.log('Current Cart:', qty)

    return (

        <View style = {{flexDirection: 'row'}}>



            <Feather 
                name="minus" 
                size={24} 
                color="black"
                style = {{borderWidth: 1, borderColor: 'grey'}}
                onPress = {function(){
                    if(qty-1<1)
                    {
                        return null;
                    }
                    else
                    {
                        setQty(qty-1)
                        setPurchaseDetails(purchaseDetails.map( 
                            function (item) { 
                                return item.id === id ? 
                                {      
                                    name : blogPost.name, 
                                    price : blogPost.price, 
                                    quantity : qty-1, 
                                    id : blogPost.id,
                                    cost: (qty-1)*blogPost.price.toString()
                                
                                } 
                                : item 
                            } 
                        ));      
                    }
      
                }}    
                
            />

            <Text style = {{borderWidth: 1, borderColor: 'grey' ,fontSize: 20}}>  {qty}  </Text>
            <Feather 
                name="plus" 
                size={24} 
                color="black" 
                style = {{borderWidth: 1, borderColor: 'grey'}}
                onPress = {function(){
                    if(qty+1>maxQuantity)
                    {
                        return null;
                    }
                    else
                    {
                        setQty(qty+1)
                        setPurchaseDetails(purchaseDetails.map( 
                            function (item) { 
                                return item.id === id ? 
                                {      
                                    name : blogPost.name, 
                                    price : blogPost.price, 
                                    quantity : qty+1, 
                                    id : blogPost.id,
                                    cost: (qty+1)*blogPost.price.toString()
                                
                                } 
                                : item 
                            } 
                        ));      
                    }
                    
                    
                }}    
            />

        </View>

    )
}


const styles = StyleSheet.create({

    CartItem:{
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 10

    },
    Container:
    {
        flex: 1,

       
    },
 
    bottom:{
        flexDirection: 'row',
        width: '100%', 
        height: 50, 
        backgroundColor: '#f4511e', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
})
export default QuantityCounter