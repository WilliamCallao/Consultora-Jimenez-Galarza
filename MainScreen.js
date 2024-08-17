import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapBackground from './MapBackground';
import CustomCard from './CustomCard';
import FloatingNavbar from './FloatingNavbar';

const MainScreen = ({ navigation }) => {
  return (
    <MapBackground>
      <View style={styles.container}>
        <View></View>
        <View>
          <CustomCard
            title="Gate 1C"
            subtitle="Airport Infrastructure"
            buttonText="Build a route"
          >
            <Text>Additional content can go here.</Text>
          </CustomCard>
          <FloatingNavbar navigation={navigation} />
        </View>
      </View>
    </MapBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    paddingBottom: 25,
  }
});

export default MainScreen;
