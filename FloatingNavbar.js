import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const FloatingNavbar = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(0); // Ítem seleccionado inicialmente
  const translateX = useSharedValue(0); // Posición inicial del indicador

  const menuItems = [
    { icon: 'home', screen: 'MainScreen' },
    { icon: 'person', screen: 'MainScreen' },
    // { icon: 'search', screen: 'MainScreen' },
    // { icon: 'notifications', screen: 'MainScreen' },
  ];

  const itemWidth = 70;
  const spacing = 10;

  useEffect(() => {
    translateX.value = withSpring(selectedItem * (itemWidth + spacing), {
      damping: 15,
      stiffness: 150, 
    });
  }, [selectedItem, itemWidth]);

  const handlePress = (index, screen) => {
    setSelectedItem(index);
    translateX.value = withSpring(index * (itemWidth + spacing), {
      damping: 15,
      stiffness: 150,
    });
    navigation.navigate(screen);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.container, {  }]}>
        <Animated.View style={[styles.indicator, { width: itemWidth }, animatedStyle]} /> 
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.iconBox, { width: itemWidth, marginRight: index === menuItems.length - 1 ? 0 : spacing }]}
            onPress={() => handlePress(index, item.screen)}
          >
            <Icon name={item.icon} size={30} color={selectedItem === index ? '#000' : '#757575'} />
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
  },
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#3C3C3C',
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
