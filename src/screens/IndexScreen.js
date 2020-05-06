import React from'react'
import {Text,View,StyleSheet,Button} from 'react-native'


const IndexScreen = function({navigation}){


    return (
        <View>
            <Button
                title = "Customer"
                onPress = {function(){
                    navigation.navigate('Customer')
                }}
            />

            <Button
                title = "Shopkeeper"
                onPress = {function(){
                    navigation.navigate('Home')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen