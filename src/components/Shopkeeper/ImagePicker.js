import React , {useState, useEffect} from 'react';
import { Text, Button, Image, View , StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { withNavigation } from 'react-navigation';

const ImagePickerr = ({productImage, setProductImage}) => {
   
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.container}>
          <Button title="Pick an image from camera roll" onPress={ async () => 
          {
            try {
              let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
              if (!result.cancelled) {
                setProductImage(result.uri);
              }
        
              console.log(result);
            } catch (E) {
              console.log(E);
            }
          }
          } />
        </View>
        <Image source={{ uri: productImage }} style={{ width: 300, height: 250 }} />
      </View>
    );
  }

 

const styles=StyleSheet.create({
    container : {
        marginHorizontal : 80,
        marginVertical : 10,
        borderRadius : 5,
        borderWidth : 2
      }
})

export default withNavigation(ImagePickerr);