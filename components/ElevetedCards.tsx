import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const ElevetedCards = () => {
  return (
    <View>
      <Text style={style.headingText}>ElevetedCards</Text>
      <ScrollView horizontal={true} style={style.container}>
        <View style={[style.card, style.cardEleveted]}>
          <Text>tap</Text>
        </View>
        <View style={[style.card, style.cardEleveted]}>
          <Text>tap</Text>
        </View>
        <View style={[style.card, style.cardEleveted]}>
          <Text>tap</Text>
        </View>
        <View style={[style.card, style.cardEleveted]}>
          <Text>tap</Text>
        </View>
        <View style={[style.card, style.cardEleveted]}>
          <Text>tap</Text>
        </View>
        <View style={[style.card, style.cardEleveted]}>
          <Text>tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardEleveted: {
    backgroundColor: '#CAD5E2',
    // elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#33333',
  },
});
export default ElevetedCards;
