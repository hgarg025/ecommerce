import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity,FlatList} from 'react-native'


const ByProduct = function({navigation}){

    const prods = [
        {name: 'prod1', id: 1},
        {name: 'prod2', id: 2},
        {name: 'prod3', id: 3},
        {name: 'prod4', id: 4},
        {name: 'prod5', id: 5},
    ]

    return (
        <View>
        <FlatList
            data = {prods}
            keyExtractor = {function(prods){
                return prods.name
            }}

            renderItem = {function({item}){
                return(
                    <TouchableOpacity
                        onPress={function(){
                            navigation.navigate('ProductD')
                        }}
                    >
                        <View style = {{height:200,backgroundColor: 'grey'}}>
                        </View>
                    <Text>{item.name}</Text>

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

})

export default ByProduct