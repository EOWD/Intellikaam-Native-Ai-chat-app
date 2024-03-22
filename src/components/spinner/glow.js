import React from 'react';
import { View, StyleSheet } from 'react-native';

const GlowingCircle = () => {
  return <View style={styles.circle} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, // half of the width/height to create a circle
    backgroundColor: 'blue', // replace with your desired color
    // iOS shadow properties for the glow effect
    shadowColor: 'rgba(0,0,255,0.7)', // a blue glow with some transparency
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    // For Android, elevation works differently and may not produce a glow
    elevation: 20,
  },
});

export default GlowingCircle;
