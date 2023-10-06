import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>actionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.container}>
          <Text style={styles.headerText}>whats new in js 2021- es12</Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />
        <view style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deserunt a dignissimos minima quo quam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Est, beatae? Amet eligendi
            voluptatibus ipsum ipsa?
          </Text>
        </view>
        <view style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('')}>
            <Text> read more...</Text>
          </TouchableOpacity>
        </view>
        <view style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('')}>
            <Text> follow me...</Text>
          </TouchableOpacity>
        </view>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  container: {},
  cardImage: {
    height: 100,
    width: 100,
  },
  bodyContainer: {},
  footerContainer: {},
});
