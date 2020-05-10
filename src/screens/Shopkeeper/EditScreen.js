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
                <View style={styles.container}>
    <Text style={styles.text}>{productDetails[i].category}</Text>
    <Text style={styles.text}>{productDetails[i].name}</Text>
    <Text style={styles.text}>{productDetails[i].price}</Text>
    <Text style={styles.text}>{productDetails[i].quantity}</Text>
    <Text style={styles.text}>{productDetails[i].edate}</Text>
    <Text style={styles.text}>{productDetails[i].id}</Text>
    <View style={styles.button1}>
    <Button title="Edit" 
    onPress={ () => navigation.navigate('AddProduct', { id : id })}
    />
    </View>
    <View style={styles.button}>
    <Button title="Delete" onPress = { () => 
        {
            setProductDetails(productDetails.filter(item => item.id !== id));
            navigation.pop()
        }}/>
        </View>
    </View>
            )
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>nothing to show</Text>
        </View>
    )
}

EditScreen.navigationOptions = function({navigation}){

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
        flex : 1,
        backgroundColor : 'orange'
    },
    text : {
        fontSize : 30,
        fontWeight : "bold",
        marginTop : 20,
        textAlign : 'center'
    },
    button : {
        marginHorizontal : 80,
    marginVertical : 10,
    borderRadius : 5,
    borderWidth : 2
    },
    button1 :{
        marginHorizontal : 80,
    marginVertical : 10,
    borderRadius : 5,
    marginTop : 60,
    borderWidth : 2,
    marginBottom : 30

    }
});

export default EditScreen;