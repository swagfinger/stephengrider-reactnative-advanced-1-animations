import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Ball = () => {
  const position = new Animated.ValueXY(0, 0); //start value

  useEffect(() => {
    Animated.spring(position, { toValue: { x: 200, y: 500 } }).start();
  }, []);

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
});

export default Ball;
