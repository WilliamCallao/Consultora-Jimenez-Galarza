import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingNavbar = ({ navigation }) => {
  const menuItems = [
    { icon: 'home', screen: 'MainScreen' },
    { icon: 'home', screen: 'MainScreen' },
    { icon: 'home', screen: 'MainScreen', selected: true },
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
          <Icon name={item.icon} size={30} color={item.selected ? '#000' : '#000'} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  iconBox: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  iconSelected: {
    backgroundColor: '#F7C846',
  },
});

export default FloatingNavbar;
