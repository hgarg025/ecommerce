import React,{useContext} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import AppContext from '../../context/AppContext'
import { withNavigation } from 'react-navigation';

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
         

    }
}
const styles = StyleSheet.create({

    price: {
        color: '#f44336'
    }
})

export default withNavigation(ByProduct)