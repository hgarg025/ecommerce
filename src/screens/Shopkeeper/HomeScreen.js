import React , {useContext, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Slider } from 'react-native-elements';
import ProductList from '../../components/Shopkeeper/ProductList';

const HomeScreen = () => {

	const [value, setValue] = useState(0.5);

    return(
    <View style={styles.basic} >
    <ProductList title="Products" />
    <ProductList title="Sold" />
    <ProductList title="Orders" />
    <Slider style={styles.slider} 
    maximumValue={5}
    minimumValue={0}
    step={0.5}
    value={value}
    onValueChange={(val) => setValue(val)}
    />
    <Text style={styles.value}>Delivery Distance</Text>
    <Text style={styles.value}>{value} km</Text>
    </View>
	);
}

const styles = StyleSheet.create({
	slider : {
		borderColor: 'red',
		borderWidth: 2,
		margin: 20
	},
	basic: {
		flex: 1,
		justifyContent: 'space-between',
		marginBottom: 100
	},
	value : {
		textAlign : 'center',
		fontSize : 20,
		fontWeight : "900"
	}

});

export default HomeScreen;