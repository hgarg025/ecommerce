import React, {useContext,useState} from 'react'
import {Text,View,StyleSheet,FlatList,TouchableOpacity,Button} from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import {Input} from 'react-native-elements';
import {withNavigation} from 'react-navigation'
import AppContext from '../../context/AppContext'

const ProductDetail = function({navigation}){

    const [qty,setQty] = useState(0)
    const [cost,setCost] = useState('')
    const {productDetails , setProductDetails,purchaseDetails,setPurchaseDetails} = useContext(AppContext);

    const blogPost = productDetails.find((blogPost)=> blogPost.id===navigation.getParam('id'))


    

    return(
        <View>
            <View style = {styles.basicDetails}>
                <Text style= {{fontSize:18, fontWeight: 'bold'}}>
                    {blogPost.name}
                </Text>
                <Text style = {{fontWeight: 'bold', fontSize: 18 ,color: 'red'}}>
                    ₹{blogPost.price}
                </Text>
               
            </View>
            <Text>Available Quantity: {blogPost.quantity}</Text>
            <Text> Total Price : {qty*blogPost.price}</Text>
            <View style = {styles.quantityDetails}>

                <Text style = {{alignContent: 'space-between'}}>Selected Quantity: </Text>
                <View style = {{flexDirection: 'row'}}>
               
                    <Feather 
                        name="minus" 
                        size={24} 
                        color="black"
                        style = {{borderWidth: 1, borderColor: 'grey'}}
                        onPress = {function(){
                        
                            (qty-1<0)? null: setQty(qty-1)      
                        }}    
                       
                    />

                    <Text style = {{borderWidth: 1, borderColor: 'grey' ,fontSize: 20}}>  {qty}  </Text>
                    <Feather 
                        name="plus" 
                        size={24} 
                        color="black" 
                        style = {{borderWidth: 1, borderColor: 'grey'}}
                        onPress = {function(){
                            
                            (qty+1>blogPost.quantity)? null: setQty(qty+1)      
                        }}    
                    />
                    
                </View>

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
            

            
    
        </View>
    )    
}


const styles = StyleSheet.create({

    basicDetails:{
        marginVertical: 20,
        marginHorizontal: 10,
        //borderColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //borderWidth: 2
    },
    quantityDetails:{

        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 2,
        justifyContent: 'space-around'
    }

})

export default withNavigation(ProductDetail)