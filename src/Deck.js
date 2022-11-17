import React, { useRef } from 'react';
import { PanResponder, Animated, View, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCALE = 1.5;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25; //distance card needs to be dragged
const SWIPEOUT_DURATION = 250; //milliseconds

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
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          console.log('swipe RIGHT');
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          console.log('swipe LEFT');
          forceSwipe('left');
        } else {
          resetPosition();
        }
      }
    })
  ).current;

  function getCardStyle() {
    //interpolates goal is to tie input (x) with output (rotation)
    //association of one scale, with another scale: input vs output
    //Dimensions gets dimensions of screen
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * SCALE, 0, SCREEN_WIDTH * SCALE],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    //duration is millisec
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPEOUT_DURATION
    }).start();
  };

  function resetPosition() {
    Animated.spring(position, { toValue: { x: 0, y: 0 } }).start();
  }

  const renderCards = () => {
    return data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={getCardStyle()}
            {...panResponder.panHandlers}
          >
            {renderCard(item)}
          </Animated.View>
        );
      }

      return renderCard(item);
    });
  };

  return <View>{renderCards()}</View>;
};

export default Deck;
