import React from 'react';
import { StyleSheet, View, ImageBackground, Text,Platform} from 'react-native';

const Blur = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blackBackground} />
      <ImageBackground
        source={{ uri: "https://cdn.midjourney.com/012c2eea-907e-4d97-b5dc-9cafef08e0bf/0_2.webp" }}
        style={styles.blurBackground}
        blurRadius={600}
        // Adjust blur radius as needed
      />
      <Text style={styles.text}  >Intellikaam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    shadowWrapper: {
        width: 310, // Slightly larger than the ImageBackground
        height: 80, // Slightly larger than the ImageBackground
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
          },
          android: {
            elevation: 10,
          },
        }),
      },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurBackground: {
    opacity:0.4,
    width: 500, // Adjust width as needed
    height: 700, // Adjust height as needed
    borderRadius: 0,
    overflow: 'hidden', // Ensure the blur effect and borderRadius are applied correctly
    position: 'absolute', // Positioning might need adjustment based on your layout
  },
  text: {
    fontWeight: 'bold', // Make the text bold
    fontSize: 50, // Increase the text size
    color: '#ffffff', // Text color; needed to see the glow effect
    textShadowColor: 'rgba(255, 255, 255, 0.75)', // Glow color
    textShadowOffset: { width: 0, height: 0 }, // Shadow position
    textShadowRadius: 15, // Glow radius/size
  },
  blackBackground: {
    position: 'absolute', // Positions the black background absolutely within the container
    width: '100%', // Ensures the black background covers the entire container
    height: '100%', // Ensures the black background covers the entire container
    backgroundColor: 'black', // Sets the background color to black
  },
});

export default Blur;
