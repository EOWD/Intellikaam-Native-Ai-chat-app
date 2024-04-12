import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function MyPicker() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={styles.picker}
        dropdownIconColor="#ffffff" // Adjusts the dropdown icon color for better visibility
      >
        <Picker.Item label="What does biofortification aim to increase in crops?" value="java" color="#ffffff" />
        <Picker.Item label="Which is a benefit of using biotech enzymes in food processing?" value="Which is a benefit of using biotech enzymes in food processing?" color="#ffffff" />
        <Picker.Item label="Which is NOT a commonly genetically modified food crop?
" color="#ffffff"  />

      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // This is the container that could be your screen or a part of your screen
    backgroundColor: '#000', // Ensures the background is dark
    padding: 20, // Provides some padding around the Picker
  },
  picker: {
    
    color: '#ffffff', // Sets the text color to white for all items
    backgroundColor: 'black', // Optional: Sets a dark background for the Picker itself
  },
});
