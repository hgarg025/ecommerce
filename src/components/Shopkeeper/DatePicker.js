import React, {useState} from 'react';
import {Text,View, Button, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({productEdate,setProductEdate}) => {
  const [date, setDate] = useState(new Date(productEdate));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

 let d1 = date.toString();
 let d2 = d1.substr(4,11); 
 setProductEdate(d2);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View >
      <View style={styles.container}>
        <Button onPress={showDatepicker} title="Select Expiry date" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.text1}>You Selected</Text>
    <Text style={styles.text2}>{productEdate}</Text>
    </View>
  );
};

const styles= StyleSheet.create({
  container : {
    marginHorizontal : 80,
    marginVertical : 10,
    borderRadius : 5,
    borderWidth : 2
  },
  text1 :{
    textAlign : 'center',
    fontSize : 17,
    fontWeight : "900"
  },
  text2 :{
    textAlign : 'center',
    fontSize : 24,
    fontWeight : "bold"
  }
})

export default DatePicker;