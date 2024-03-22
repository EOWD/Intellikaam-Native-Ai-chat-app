import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { AuthContext } from '../auth/auth.context';
import Colors from "../constants/Colors";
import LoadingAnimation from "../components/spinner/Spinner";

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); // Additional field
  const [phoneNumber, setPhoneNumber] = useState(''); // Additional field
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // New state for tracking steps
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;

  const handleSignup = async () => {
    setLoading(true);
    console.log(password,fullName,email,phoneNumber)
    // Here, you would combine all the data (email, password, fullName, phoneNumber)
    // and send it to your backend to create a new user account
    setTimeout(() => {
      const fakeToken = 'dummy-auth-token';
      login(fakeToken);
      setLoading(false);
    }, 3000);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {loading && <LoadingAnimation />}
      <View style={styles.container}>
        {step === 1 && (
          <>
            <Text style={styles.description}>Enter your full name</Text>
            <TextInput
              value={fullName}
              placeholder="Full Name"
              onChangeText={setFullName}
              style={styles.input}
              autoCapitalize="words"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setStep(step + 1)}
              disabled={fullName === ""}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.description}>Enter your phone number</Text>
            <TextInput
              value={phoneNumber}
              keyboardType="phone-pad"
              placeholder="Phone Number"
              onChangeText={setPhoneNumber}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setStep(step + 1)}
              disabled={phoneNumber === ""}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </>
        )}

        {step === 3 && (
          <>
            <Text style={styles.description}>Enter your email and password</Text>
            <TextInput
              value={email}
              keyboardType="email-address"
              placeholder="Email Address"
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
              onPress={handleSignup}
              disabled={loading}
            >
              <Text style={[styles.buttonText, email !== "" && password !== "" ? styles.enabledText : styles.buttonText]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}




const styles = StyleSheet.create({
  blackBackground: {
    position: 'absolute', // Positions the black background absolutely within the container
    width: '100%', 
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
