// MainScreen.js
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapBackground from './MapBackground';
import theme from './theme';
import CustomCard from './CustomCard';

const MainScreen = () => {
  return (
    <MapBackground>
      <View style={{ flex: 1, justifyContent: 'center' }}>
      <CustomCard
        title="Gate 1C"
        subtitle="Airport Infrastructure"
        buttonText="Build a route"
      >
        <Text>Additional content can go here.</Text>
      </CustomCard>
    </View>
    </MapBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.colors.text,
  },
});

export default MainScreen;
