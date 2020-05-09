import React, {useState} from 'react';
import {Text,View, Button, Platform} from 'react-native';
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
    <View>
      <View>
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
    <Text>{productEdate}</Text>
    </View>
  );
};

export default DatePicker;