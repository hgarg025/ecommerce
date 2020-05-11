import React,{useContext} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import AppContext from '../../context/AppContext'
import { withNavigation } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons'; 

const ByProduct = function({navigation}){

    const {productDetails} = useContext(AppContext)
    console.log(productDetails.length)
    return (
        <View>
        <FlatList
            data = {productDetails}
            keyExtractor = {function(productDetails){
                return productDetails.id
            }}

            renderItem = {function({item}){
                return(
                    <TouchableOpacity
                        onPress={function(){
                            navigation.navigate('ProductD',{id: item.id})
                        }}
                    >
                        <View style = {{height:80}}>
                        
                        
                        <Text>NAME: {item.name} - </Text>
                        <Text style = {styles.price}>PRICE: ₹ {item.price}</Text>
                        <Text style>ID:  {item.id}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
        </View>

    )
}

ByProduct.navigationOptions = function({navigation}){

    return {
        title: 'Products',
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        headerRight: ()=> <TouchableOpacity
            onPress ={ function(){
                navigation.navigate('Cart')
            }}
        >
            <AntDesign 
                style = {{paddingRight: 10}}
                name="shoppingcart" 
                size={24} 
                color="black" 
            />


        </TouchableOpacity>
         

    }
}
const styles = StyleSheet.create({

    price: {
        color: '#f44336'
    }
})

export default withNavigation(ByProduct)