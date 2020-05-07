import React from 'react'
import {Text,View,StyleSheet,Button,FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const CartScreen = function(){

    return (
        <View style ={styles.Container}>
            <ScrollView >
            <View>
            <Text style ={{fontSize:50}}> Text Screen1</Text>
            <Text style ={{fontSize:50}}> Text Screen2</Text>
            <Text style ={{fontSize:50}}> Text Screen3</Text>
            <Text style ={{fontSize:50}}> Text Screen4</Text>

            <Text style ={{fontSize:50}}> Text Screen9</Text>

            <Text style ={{fontSize:50}}> Text Screen1</Text>
            <Text style ={{fontSize:50}}> Text Screen2</Text>
            <Text style ={{fontSize:50}}> Text Screen2</Text>
            <Text style ={{fontSize:50}}> Text Screen3</Text>
            <Text style ={{fontSize:50}}> Text Screen4</Text>

            <Text style ={{fontSize:50}}> Text Screen9</Text>
            <Text style ={{fontSize:50}}> Text Screen3</Text>
            <Text style ={{fontSize:50}}> Text Screen4</Text>

        
            </View>
            </ScrollView>
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