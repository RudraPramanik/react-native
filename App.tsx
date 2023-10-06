import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import AppPro from './AppPro';
import FlatCards from './components/FlatCards';
import ElevetedCards from './components/ElevetedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>rudra</Text>
        <FlatCards />
        <ElevetedCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
