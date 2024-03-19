import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import * as LocalAuthentication from 'expo-local-authentication';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('authToken');
        if (userToken) {
          const hasBiometrics = await LocalAuthentication.hasHardwareAsync() && await LocalAuthentication.isEnrolledAsync();
          if (hasBiometrics) {
            const biometricAuth = await LocalAuthentication.authenticateAsync({
              promptMessage: "Authenticate to proceed",
              fallbackLabel: "Enter Password",
            });
            if (!biometricAuth.success) {
              // Handle failed biometric authentication (e.g., user cancels the prompt)
              setUserToken(null); // You might want to navigate to a login screen or show an error message
              setIsAuthLoading(false);
              return;
            }
          }
        }
      } catch (e) {
        console.error('Token validation or biometric authentication failed', e);
      }

      setUserToken(userToken);
      setIsAuthLoading(false);
    };

    bootstrapAsync();
  }, []);

  const login = async (token) => {
    try {
      await SecureStore.setItemAsync('authToken', token);
      setUserToken(token);
    } catch (e) {
      console.error('Saving token failed', e);
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync('authToken');
      setUserToken(null);
    } catch (e) {
      console.error('Removing token failed', e);
    }
  };

  return (
    <AuthContext.Provider value={{
      userToken,
      login,
      logout,
      isAuthLoading,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
