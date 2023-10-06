import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={style.headingText}>Trending places</Text>
      <View style={style.card}>
        <Text>hello </Text>
        <Text>hello </Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34hPo9zGkYxB2NKePgvPeImdm-CDTsHPrt4DFUyU_4A&s',
          }}
          style={style.cardImage}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  headingText: {},
  card: {},
  cardEleveted: {},
  cardImage: {
    width: 51,
    height: 51,
    resizeMode: 'contain',
  },
});
export default FancyCard;
