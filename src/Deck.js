import React from 'react';
import { View, Animated } from 'react-native';

const Deck = ({ renderCard, data }) => {
  const renderCards = () => {
    return data.map((item) => {
      return renderCard(item);
    });
  };

  return <View>{renderCards()}</View>;
};

export default Deck;
