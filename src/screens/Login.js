import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../auth/auth.context'; // Adjust the path as necessary
import Colors from "../constants/Colors"; // Ensure you have a similar Colors module
import LoadingAnimation from "../components/spinner/Spinner"
import Blur from '../stylingTest/blur';
export default function LoginScreen() {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;
  const handleLogin = async () => {
    setLoading(true);
    // Simulate an API call for demonstration
    setTimeout(() => {
      const fakeToken = 'dummy-auth-token'; // In reality, you would get this token from your authentication API upon successful login
      login(fakeToken);
      setLoading(false);
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1, }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
   
      <Blur/>
      {loading && (
       <LoadingAnimation/>
      )}

      <View style={styles.container}>
        <Text style={styles.description}>
          Enter your email and password to log in.
        </Text>

        <TextInput
          value={email}
          keyboardType="email-address"
          placeholder="Email address"
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
        />
        
        <TextInput
          value={password}
          secureTextEntry
          placeholder="Password"
          onChangeText={setPassword}
          style={styles.input}
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={[styles.button, email !== "" && password !== "" ? styles.enabled : styles.button]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={[styles.buttonText, email !== "" && password !== "" ? styles.enabledText : styles.buttonText]}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
  <Text style={{color:'#3a3a3a'}}>Don't have an account?<Text style={{color:Colors.primary}}>Sign Up</Text> </Text>
</TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  blackBackground: {
    position: 'absolute', // Positions the black background absolutely within the container
    width: '100%', // Ensures the black background covers the entire container
    height: '100%', // Ensures the black background covers the entire container
    backgroundColor: 'black', // Sets the background color to black
  },
  container: {
    
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    
   // Positions the black background absolutely within the container
  // Ensures the black background covers the entire container
    backgroundColor: 'black',
  },
  description: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
   borderBlockColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
   
  },
  input: {
    height: 50,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 12,
    color:'rgba(255,255,255,0.99)'
  },
  loading: {
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
});
