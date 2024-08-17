import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const FloatingNavbar = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(0); // Ítem seleccionado inicialmente
  const translateX = useSharedValue(0); // Posición inicial del indicador

  const menuItems = [
    { icon: 'home', screen: 'MainScreen' },
    { icon: 'search', screen: 'SearchScreen' },
    { icon: 'person', screen: 'ProfileScreen' },
  ];

  const itemWidth = 70; // Ancho fijo para cada ítem, ajustado para hacerlo circular
  const containerWidth = itemWidth * menuItems.length + (menuItems.length - 1) * 10; // Ancho total del contenedor

  useEffect(() => {
    // Ajuste inicial del indicador basado en el ítem seleccionado inicialmente
    translateX.value = withSpring(selectedItem * (itemWidth + 5));
  }, [selectedItem, itemWidth]);

  const handlePress = (index, screen) => {
    setSelectedItem(index); // Cambia el ítem seleccionado
    translateX.value = withSpring(index * (itemWidth + 10)); // Actualiza la posición del indicador con animación de rebote
    navigation.navigate(screen); // Navega a la pantalla correspondiente
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.container, { width: containerWidth }]}>
        <Animated.View style={[styles.indicator, { width: itemWidth }, animatedStyle]} /> 
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.iconBox, { width: itemWidth }]}
            onPress={() => handlePress(index, item.screen)}
          >
            <Icon name={item.icon} size={30} color={selectedItem === index ? '#000' : '#888'} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'red'
  },
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 100,
    paddingHorizontal: 5,
  },
  iconBox: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  indicator: {
    position: 'absolute',
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 100,
    top: 5,
    left: 5,
  },
});

export default FloatingNavbar;
