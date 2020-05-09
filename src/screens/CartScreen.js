import React,{useContext} from 'react'
import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity,ScrollView} from 'react-native'

import AppContext from '../context/AppContext'
const CartScreen = function(){

    const {purchaseDetails,setPurchaseDetails} = useContext(AppContext);

     return (
        <View style ={styles.Container}>
            
           
            <FlatList
                data = {purchaseDetails}
                keyExtractor = {function(purchaseDetails){
                    return purchaseDetails.id
                }}

                renderItem = {function({item}){
                    return(

                        <View style = {{height:150}}>
                        
                        
                        <Text>NAME: {item.name} - </Text>
                        <Text>PRICE: ₹ {item.price}</Text>
                        <Text>ID:  {item.id}</Text>
                        <Text>QTY:  {item.quantity}</Text>
                        <Text>COST: {item.cost} </Text>
                        </View>
                    
                    )
                }}
            />

            <View style = {styles.bottom}>
                <Text>Total: </Text>
                <Button
                    title= "Chek Out"
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

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

CartScreen.navigationOptions = function({navigation}){

    return {
        title: 'Cart',
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
         

    }
}



export default CartScreen