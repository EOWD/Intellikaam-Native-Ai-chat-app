import React,{useContext, useState,useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from './src/screens/ChatComponent'; 
import Page from "./src/screens/chat"
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
    <Stack.Navigator>
      {userToken ? (
        // User is logged in
        <Stack.Screen name="Chat" component={Page} />
      ) : (
        // No user token found, user is not logged in
        <Stack.Screen name="Login" component={LoginScreen} />
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
