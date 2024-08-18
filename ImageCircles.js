import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ImageCircles = () => {
  const images = [
    'https://i0.wp.com/geotecniafacil.com/wp-content/uploads/2017/11/Ensayo-SPT.jpg?w=400&ssl=1',
    'https://ceina.com.bo/wp-content/uploads/2023/07/WEBproy4-1024x1024.jpg',
    'https://geocontrolperu.com.pe/wp-content/uploads/elementor/thumbs/spt-q23ycsoqns7yltlw9ns7f6x2ic1x3h3p6qhc3z4yvc.png',
    'https://via.placeholder.com/100x100.png?text=3',
  ]; // Lista hardcodeada de imágenes

  const maxVisibleImages = 2; // Máximo número de imágenes visibles antes de mostrar "+X"

  return (
    <View style={styles.container}>
      {images.length === 0 ? (
        <View style={styles.circle}>
          <Icon name="camera-alt" size={30} color="#757575" />
        </View>
      ) : (
        images.slice(0, maxVisibleImages).map((image, index) => (
          <View key={index} style={styles.circle}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))
      )}
      {images.length > maxVisibleImages && (
        <View style={[styles.circle, styles.moreCircle]}>
          <Text style={styles.moreText}>{`+${images.length - maxVisibleImages}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 300,
    
    backgroundColor: '#3C3C3C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -10, // Para superponer los círculos ligeramente
    overflow: 'hidden',
  },
  image: {
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 300,
    width: '100%',
    height: '100%',
  },
  moreCircle: {
    backgroundColor: '#757575',
  },
  moreText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImageCircles;
