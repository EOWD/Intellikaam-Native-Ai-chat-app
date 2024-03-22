import {Picker} from '@react-native-picker/picker';

import React,{useState} from 'react'

export default function picker() {
    setItem(itemValue)
    const [item,setItem]=useState('')
  return (
    <div>
      <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setItem(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
    </div>
  )
}
