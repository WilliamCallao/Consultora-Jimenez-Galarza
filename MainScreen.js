import React from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import FloatingNavbar from './FloatingNavbar';
import ImageCircles from './ImageCircles';

const MainScreen = ({ navigation }) => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ]; // Ejemplo de imágenes

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ImageCircles images={images} />
          <FloatingNavbar navigation={navigation} />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default MainScreen;
