// CustomDrawerContent.js
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../auth/auth.context'; // Adjust the path as necessary

function CustomDrawerContent(props) {
  const { logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Sign Out"
        onPress={() => {
          // Call signOut from AuthContext
          logout();
        }}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
