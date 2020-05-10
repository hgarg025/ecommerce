import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const SoldScreen = () => {
	return(
    <View style={styles.container}>
    <Text>Sold Screen</Text>
    </View>
	);
}

SoldScreen.navigationOptions = function({navigation}){

    return {
        title: 'Products Sold Details',
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
        flex : 1,
        backgroundColor : 'orange'
    }
});

export default SoldScreen;