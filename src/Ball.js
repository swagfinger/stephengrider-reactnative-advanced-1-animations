import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ball = () => {
  return <View style={styles.ball} />;
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
