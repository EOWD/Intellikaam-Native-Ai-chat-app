

import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

const ActionWheel = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      Animated.event([null, { dx: rotation }], { useNativeDriver: false })({
        dx: gestureState.dx,
      });
    },
    onPanResponderRelease: (event, gestureState) => {
      // Calculate the final rotation angle based on gestureState.dx
      // Update the rotation value to animate the wheel to the nearest button
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.wheel,
          {
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [-100, 100],
                  outputRange: ['-100deg', '100deg'],
                }),
              },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Text>Button 1</Text>
        <Text>Button 2</Text>
        <Text>Button 3</Text>
        <Text>Button 4</Text>
        <Text>Button 5</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActionWheel;