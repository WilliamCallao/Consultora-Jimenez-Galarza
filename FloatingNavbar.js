import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingNavbar = ({ navigation }) => {
  const menuItems = [
    { icon: 'home', screen: 'MainScreen' },
    { icon: 'home', screen: 'MainScreen', selected: true },
    { icon: 'home', screen: 'MainScreen' },
    { icon: 'home', screen: 'MainScreen' },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.iconBox, item.selected ? styles.iconSelected : null]}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Icon name={item.icon} size={30} color={item.selected ? '#000' : '#FFF'} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Transparent background to match the screen
    padding: 10,
    borderRadius: 20,
  },
  iconBox: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25, // Half of width and height to create circle shape
  },
  iconSelected: {
    backgroundColor: '#F7C846', // Yellow background for selected icon
  },
});

export default FloatingNavbar;
