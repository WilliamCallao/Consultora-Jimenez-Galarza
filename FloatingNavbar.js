import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const FloatingNavbar = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(0); // Ítem seleccionado inicialmente
  const translateX = useSharedValue(0); // Posición inicial del indicador
  const { width } = useWindowDimensions(); // Obtenemos el ancho de la ventana

  const menuItems = [
    { icon: 'home', screen: 'MainScreen' },
    { icon: 'search', screen: 'SearchScreen' },
    { icon: 'notifications', screen: 'NotificationScreen' },
    { icon: 'person', screen: 'ProfileScreen' },
  ];

  const itemWidth = width / menuItems.length; // Ancho de cada ítem basado en la cantidad de íconos y el ancho de la pantalla

  useEffect(() => {
    // Ajuste inicial del indicador basado en el ítem seleccionado inicialmente
    translateX.value = withSpring(selectedItem * itemWidth);
  }, [selectedItem, itemWidth]);

  const handlePress = (index, screen) => {
    setSelectedItem(index); // Cambia el ítem seleccionado
    translateX.value = withSpring(index * itemWidth); // Actualiza la posición del indicador con animación de rebote
    navigation.navigate(screen); // Navega a la pantalla correspondiente
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={[styles.container, { width }]}>
      <Animated.View style={[styles.indicator, { width: itemWidth - 20 }, animatedStyle]} /> 
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.iconBox, { width: itemWidth }]}
          onPress={() => handlePress(index, item.screen)}
        >
          <Icon name={item.icon} size={30} color={selectedItem === index ? '#000' : '#000'} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  iconBox: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  indicator: {
    position: 'absolute',
    height: 50,
    backgroundColor: '#F7C846',
    borderRadius: 10,
    top: 0,
    left: 10,
  },
});

export default FloatingNavbar;
