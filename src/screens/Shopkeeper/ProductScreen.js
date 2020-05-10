import React from 'react';
import { ScrollView, Text, StyleSheet} from 'react-native';
import Categories from '../../components/Shopkeeper/Categories';
const ProductScreen = () => {
	return(
    <ScrollView style={styles.container}>
    <Categories title = "category 1"/>
    <Categories title = "category 2"/>
    <Categories title = "category 3"/>
    <Categories title = "category 4"/>
    <Categories title = "category 5"/>
    </ScrollView>
	);
}

ProductScreen.navigationOptions = function({navigation}){

    return {
        title: 'Product Details',
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
    backgroundColor : 'orange'
}
});

export default ProductScreen;