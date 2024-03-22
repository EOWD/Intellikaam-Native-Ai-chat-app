// ChatDrawerWrapper.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Page from './chat';
import CustomDrawerContent from '../constants/CustomDrawerContent'; // Adjust the path as necessary

const Drawer = createDrawerNavigator();

function ChatDrawerWrapper() {
  return (
    <Drawer.Navigator  screenOptions={{
    drawerStyle: {
      backgroundColor: 'black',
      width: 240,
    },
  }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen  options={{ title: '',headerStyle: {
      backgroundColor: 'black', 
      borderBottomWidth: 0, // Removes the border for all headers
      shadowOpacity: 0, // Removes shadow on iOS for all headers
      elevation: 0, // This sets the header's background color to black
    },
    headerTintColor: '#fff',  }}  name="Chat" component={Page} />
   
    </Drawer.Navigator>
  );
}

export default ChatDrawerWrapper;
