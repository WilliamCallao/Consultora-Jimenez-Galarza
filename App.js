import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider as PaperProvider } from 'react-native-paper';
import SelectionScreen from './MainScreen';
import theme from './theme';

const loadFonts = () => {
  return Font.loadAsync({
    'SFUIDisplay-Bold': require('./assets/fonts/SFUIDisplay-Bold.ttf'),
    'SFUIDisplay-Medium': require('./assets/fonts/SFUIDisplay-Medium.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const fetchFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };
    fetchFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider theme={theme}>
      <SelectionScreen />
    </PaperProvider>
  );
};

export default App;
