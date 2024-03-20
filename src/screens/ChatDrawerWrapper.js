// ChatDrawerWrapper.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Page from './chat';
import CustomDrawerContent from '../constants/CustomDrawerContent'; // Adjust the path as necessary

const Drawer = createDrawerNavigator();

function ChatDrawerWrapper() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen  options={{ title: '',headerStyle: {
      backgroundColor: 'black', // This sets the header's background color to black
    },
    headerTintColor: '#fff',  }}  name="Chat" component={Page} />
   
    </Drawer.Navigator>
  );
}

export default ChatDrawerWrapper;
