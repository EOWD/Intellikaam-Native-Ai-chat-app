import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function MyPicker() {
  // Initialize the item state before using it
  const [item, setItem] = useState('');

  return (
    <View>
      <Picker
        selectedValue={item} // Use the state variable here
        onValueChange={(itemValue, itemIndex) =>
          setItem(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}
