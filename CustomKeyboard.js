// CustomKeyboard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const CustomKeyboard = ({ visible, onKeyPress, onDelete, onSubmit, label, currentValue }) => {
  const translateY = useSharedValue(300); // Posición inicial fuera de la pantalla

  // Actualiza la animación según la visibilidad
  React.useEffect(() => {
    translateY.value = withTiming(visible ? 0 : 300, {
      duration: 300, // Ajuste de duración para una animación más rápida
      easing: Easing.out(Easing.cubic), // Cambiar easing para mejor experiencia
    });
  }, [visible, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  // Simulación de teclas del teclado
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', '⌫'],
  ];

  return (
    <Animated.View style={[styles.keyboardContainer, animatedStyle]}>
      <View style={styles.keyGrid}>
        {keys.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={[styles.key, key === '⌫' && styles.deleteKey]}
                onPress={() => {
                  if (key === '⌫') {
                    onDelete();
                  } else {
                    onKeyPress(key);
                  }
                }}
              >
                <Text style={styles.keyText}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <TouchableOpacity
          style={styles.submitKey}
          onPress={onSubmit}
        >
          <Text style={styles.submitKeyText}>
            {`${currentValue || ''}`} {/* Mostrar el valor actual en el botón */}
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Sombra para Android
  },
  keyGrid: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  key: {
    flex: 1,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555',
    paddingVertical: 10,
    borderRadius: 5,
  },
  deleteKey: {
    backgroundColor: '#d9534f', // Rojo para el botón de borrar
  },
  keyText: {
    color: '#fff',
    fontSize: 16,
  },
  submitKey: {
    backgroundColor: '#5cb85c', // Verde para el botón de enviar
    marginTop: 5,
    paddingVertical: 10,
    borderRadius: 5,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitKeyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomKeyboard;
