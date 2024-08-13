// MainScreen.js
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  TouchableWithoutFeedback,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomCard from './CustomCard';
import FloatingNavbar from './FloatingNavbar';
import CustomKeyboard from './CustomKeyboard';

const MainScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [label, setLabel] = useState('número'); // Estado para controlar el label dinámico

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (keyboardVisible) {
          setKeyboardVisible(false);
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [keyboardVisible]);

  const handleKeyPress = (key) => {
    if (key === '.') {
      if (!number.includes('.')) {
        setNumber((prev) => prev + key);
      }
    } else {
      setNumber((prev) => prev + key);
    }
  };

  const handleBackspace = () => {
    setNumber((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    setKeyboardVisible(false);
    console.log('Input submitted:', number);
  };

  const handleCloseKeyboard = () => {
    setKeyboardVisible(false);
  };

  const openKeyboard = (inputLabel) => {
    setLabel(inputLabel); // Actualiza el label según el campo editado
    setKeyboardVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <CustomCard
            title="Gate 1C"
            subtitle="Airport Infrastructure"
            buttonText="Build a route"
          >
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={() => openKeyboard('número')}
            >
              <Text style={styles.inputText}>
                {number || 'Tap to enter number'}
              </Text>
            </TouchableOpacity>
            <TextInput
              label="Number Input"
              value={number}
              mode="outlined"
              style={styles.hiddenInput}
              editable={false}
            />
            <Text>Additional content can go here.</Text>
          </CustomCard>
          <FloatingNavbar navigation={navigation} />
        </ScrollView>
        <CustomKeyboard
          visible={keyboardVisible}
          onKeyPress={handleKeyPress}
          onDelete={handleBackspace}
          onSubmit={handleSubmit}
          label={label} // Usa el estado label para actualizar el texto dinámicamente
          currentValue={number} // Pasa el valor actual al teclado para mostrarlo
        />
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
  inputContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 16,
    color: '#000',
  },
  hiddenInput: {
    display: 'none',
  },
});

export default MainScreen;