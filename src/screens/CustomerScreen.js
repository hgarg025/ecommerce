import React,{useState} from 'react'
import {Text,View,StyleSheet,Button,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import ShopList from './ShopList';

const CustomerScreen = function({navigation}){

    return (
        <View>
            <View style = {styles.topBar}>

                <TouchableOpacity
                    style = {styles.topButtons}
                >
                    <Text>
                        SEACRH BY PRODUCT
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {styles.topButtons}
                    onPress  = {function(){ navigation.navigate('Shops')}}
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
        </View>
    )
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