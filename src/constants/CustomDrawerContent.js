// CustomDrawerContent.js
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../auth/auth.context'; // Adjust the path as necessary
import { StyleSheet } from 'react-native';
function CustomDrawerContent(props) {
  const { logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView >
      <DrawerItem 
      labelStyle={{color:'white'}}
        label="Sign Out"
        onPress={() => {
          // Call signOut from AuthContext
          logout();
        }}
      />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  drawerBackground: {
    backgroundColor: '#DCDCE2',
  },
  drawerItemBackground: {
    backgroundColor: '#DCDCE2',
  },
});
export default CustomDrawerContent;
