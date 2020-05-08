import React,{useState} from 'react'
import {Text,View,StyleSheet,Button,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import ShopList from './ShopList';
import {Feather} from '@expo/vector-icons'
import DrawerNavigator from '../components/AppDrawer'
import {createDrawerNavigator} from 'react-navigation'

const CustomerScreen = function({navigation}){

    const [screen,setScreen] = useState('Product')
    return (
        <View>
            <View style = {styles.topBar}>

                <TouchableOpacity
                    style = {styles.topButtons}
                    onPress  = {function(){
                        navigation.navigate('ByProd')
                    }}
                >
                    <Text>
                        SEACRH BY PRODUCT
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {styles.topButtons}
                    onPress  = {function(){
                        navigation.navigate('Shops')
                    }}
                >
                    <View style ={{flexDirection: 'row'}}>
                        <Text style = {{paddingRight: 20,
                                        paddingLeft: 10
                        }}>
                            SEACRH BY SHOP
                        </Text>
                        <AntDesign name="appstore-o" size={24} color="black"/>
                    </View>
                </TouchableOpacity>
            </View>
   
                <ShopList/>
 
        </View>
    )
}


CustomerScreen.navigationOptions = function({navigation}){

    return {
        title: 'Customer',
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

    topBar :{

        flexDirection: 'row',
    },

    topButtons:{
        borderWidth: 1,
        borderColor: 'black',
        width:180,
        height:30,
        backgroundColor: 'orange'
    },
    
})

export default CustomerScreen