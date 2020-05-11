import React,{useContext} from 'react'
import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity,ScrollView} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import QuantityCounter from '../../components/Customer/QuantityCounter'

import AppContext from '../../context/AppContext'
import { Item } from 'native-base';
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

                         

                        <View style = {styles.CartItem}>
                            
                        <View>
                        
                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {{fontWeight: 'bold'}}>{item.name}:  </Text>
                            <Text style = {{color: 'red' , fontWeight: 'bold'}}>₹ {item.price}</Text>
                        </View>
                        <View style = {{flexDirection: 'row'}}>
                           
                            <Text style ={{paddingRight: 10}}>QTY:  {item.quantity}</Text>
                            <Text>COST: {item.cost} </Text>
                        </View>
                        {/* <Text>ID:  {item.id}</Text> */}
                        </View>
                        <View style = {{flexDirection: 'row',alignItems: 'center'}}>
                            <QuantityCounter 
                                id=  {item.id}
                                quant = {item.quantity}
                            />
                            <EvilIcons 
                                name="trash" 
                                size={50} 
                                color="black" 
                                onPress = {function(){

                                    setPurchaseDetails(purchaseDetails.filter(prod => prod.id !== item.id));
                                }}
                            />
                        </View>
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