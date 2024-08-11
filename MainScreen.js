// MainScreen.js
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapBackground from './MapBackground';
import theme from './theme';

const MainScreen = () => {
  return (
    <MapBackground>
      {/* Overlay UI elements */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido a la App</Text>
        <Button
          title="Botón 1"
          onPress={() => alert('Botón 1 presionado')}
          color={theme.colors.primary}
        />
        <Button
          title="Botón 2"
          onPress={() => alert('Botón 2 presionado')}
          color={theme.colors.primary}
        />
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
