import React , {useContext} from 'react';
import AppContext from '../../context/AppContext';
import { View, Text, StyleSheet, Button} from 'react-native';

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('ID');
    const {productDetails, setProductDetails} = useContext(AppContext);
    for(let i=0;i<productDetails.length;i++)
    {
        if(productDetails[i].id == id)
        {
            return (
                <View>
    <Text>{productDetails[i].category}</Text>
    <Text>{productDetails[i].name}</Text>
    <Text>{productDetails[i].price}</Text>
    <Text>{productDetails[i].quantity}</Text>
    <Text>{productDetails[i].edate}</Text>
    <Text>{productDetails[i].id}</Text>
    <Button title="Edit" 
    onPress={ () => navigation.navigate('AddProduct', { id : id })}
    />
    <Button title="Delete" onPress = { () => 
        {
            setProductDetails(productDetails.filter(item => item.id !== id));
            navigation.pop()
        }}/>
    </View>
            )
        }
    }
    return(
        <View>
            <Text>nothing to show</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default EditScreen;