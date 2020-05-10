import React from'react'
import {Text,View,StyleSheet,Button} from 'react-native'


const IndexScreen = function({navigation}){


    return (
        
        <View style={styles.container}>
            <View style={styles.button}>
            <Button 
                title = "Customer"
                onPress = {function(){
                    navigation.navigate('Customer')
                }}
            />
            </View>
            <View style={styles.button}>
            <Button 
                title = "Shopkeeper"
                onPress = {function(){
                    navigation.navigate('Home')
                }}
            />
            </View>
        </View>
    )
}

IndexScreen.navigationOptions = function({navigation}){

    return {
        title: 'E-Commerce App',
        headerStyle: 
        {
            
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle:
           {
            fontWeight: 'bold',
          }        

    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent:'center',
        backgroundColor: 'orange'
    },
    button : {
        margin : 50,
        borderRadius : 5,
        borderWidth : 10,
        borderColor : '#f4511e',
        elevation : 10
    }
})

export default IndexScreen