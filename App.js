import React,{useContext, useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./src/screens/Signup"
import Page from "./src/screens/chat"
import CustomDrawerContent from './src/constants/CustomDrawerContent'; // Adjust the path as necessary
import ChatDrawerWrapper from './src/screens/ChatDrawerWrapper'
import LoginScreen from "./src/screens/Login"
import { AuthProvider, AuthContext }from "./src/auth/auth.context"
const Stack = createStackNavigator(); 

function AppContent() {
  const { userToken } = useContext(AuthContext); // Use AuthContext to determine the login state
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Assume the token check is instantaneous, but it can be async
    setIsInitializing(false);
  }, [userToken]);

  if (isInitializing) {
    return null; // Or Splash Screen
  }

  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
      backgroundColor: 'black', // Set the background color for all headers
      borderBottomWidth: 0, // Removes the border for all headers
      shadowOpacity: 0, // Removes shadow on iOS for all headers
      elevation: 0, // Removes shadow on Android for all headers
    },
    headerTintColor: '#fff', // Sets the color of the back button and title for all headers
    headerTitleStyle: {
      fontWeight: 'bold', // Sets the title font weight for all headers
    },
    }}>
      {userToken ? (
        // User is logged in
        <>
        
         <Stack.Screen  name="Intellikaam" component={ChatDrawerWrapper}         screenOptions={{
    
          // ... other options
        }}
/>
         
       
        
        </>
      ) : (
        // No user token found, user is not logged in
        <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
      
    </Stack.Navigator>
  );
}

function RootNavigator(){
  return(
    <NavigationContainer>
      <AppContent />
    </NavigationContainer>
  );
}

export default function App() {
  return (<AuthProvider><RootNavigator /></AuthProvider>);
}
