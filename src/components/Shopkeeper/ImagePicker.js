import * as React from 'react';
import { Button, Image, View , StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { withNavigation } from 'react-navigation';

class ImagePickerr extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.container}>
        <Button title="Pick an image from camera roll" onPress={this._pickImage} />
        </View>
        {image && <Image source={{ uri: image }} style={{ width: 300, height: 250 }} />}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
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