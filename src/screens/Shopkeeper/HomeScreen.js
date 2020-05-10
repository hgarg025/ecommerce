import React , {useContext, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Slider } from 'react-native-elements';
import ProductList from '../../components/Shopkeeper/ProductList';

const HomeScreen = () => {

	const [value, setValue] = useState(0.5);

    return(
    <View style={styles.basic} >
    <ProductList title="Products" />
    <ProductList title="Orders" />
    <ProductList title="Sold" />
    <Slider style={styles.slider} 
    maximumValue={5}
    minimumValue={0}
    step={0.5}
    value={value}
    onValueChange={(val) => setValue(val)}
    />
    <Text style={styles.value1}>Delivery Distance</Text>
    <Text style={styles.value2}>{value} km</Text>
    </View>
	);
}

HomeScreen.navigationOptions = function({navigation}){

    return {
        title: 'Shopkeeper',
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
	slider : {
		borderColor: '#f4511e',
		borderWidth: 3,
		margin: 20,
		borderRadius : 15
	},
	basic: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor : 'orange'
	},
	value1 : {
		textAlign : 'center',
		fontSize : 20,
		fontWeight : "bold",
		color : 'white'
	},
	value2 : {
		textAlign : 'center',
		fontSize : 30,
		fontWeight : "bold",
		marginBottom : 60,
		color : 'white'
	}

});

export default HomeScreen;