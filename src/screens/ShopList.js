import React from 'react'
import {Text,View,FlatList,StyleSheet,TouchableOpacity} from 'react-native'


const ShopList = function(){

    const shoplist = ['Shop #1','Shop #2','Shop #3']
        
    return (
        
        <FlatList
            data = {shoplist}
        />

    )

}

const styles = StyleSheet.create({

})

export default ShopList