import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Colors from "../../constants/Colors"; // Ensure you have a similar Colors module
import GlowingCircle from '../../components/spinner/glow'
const LoadingAnimation = ({ message = "Loading..." }) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/images/spinner/S1.json')} // Adjust this path
        autoPlay
        loop
        style={{ width: 300, height: 300 }} // Adjust size as needed
      />
      <Text style={styles.message}>{message}</Text>
      <GlowingCircle></GlowingCircle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(10,10,10,0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  message: {
    fontSize: 18,
    color: Colors.gray, // Adjust as needed
    marginTop: 10,
  },
});

export default LoadingAnimation;
