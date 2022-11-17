import React, { useRef } from 'react';
import { PanResponder, Animated } from 'react-native';

const Deck = ({ renderCard, data }) => {
  //OPTIMIZATION: useRef so same reference on re-render
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      //user taps/presses down on screen AND should this pan responder handle the event
      onStartShouldSetPanResponder: () => true,

      // onMoveShouldSetPanResponder: () => true,
      // onPanResponderGrant: () => {
      //   pan.setOffset({
      //     x: pan.x._value,
      //     y: pan.y._value
      //   });
      // },

      //when user starts dragging. gesture has info about what user is doing with finger, and speed its moving
      //when user stops dragging, gesture becomes 0 unless saved
      //dx
      //dy
      //moveX
      //moveY
      //wont need Animated.spring as we set x,y manually
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },

      //when user stops dragging/releases button
      onPanResponderRelease: () => {
        // pan.flattenOffset();
      }
    })
  ).current;

  const renderCards = () => {
    return data.map((item) => {
      return renderCard(item);
    });
  };

  return (
    <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
      {renderCards()}
    </Animated.View>
  );
};

export default Deck;
