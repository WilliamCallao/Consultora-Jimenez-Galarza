import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';  // Asegúrate de que esta línea está correcta
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import MainScreen from './MainScreen';
import theme from './theme';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    'SFUIDisplay-Bold': require('./assets/fonts/SFUIDisplay-Bold.ttf'),
    'SFUIDisplay-Medium': require('./assets/fonts/SFUIDisplay-Medium.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Mantén la pantalla de carga visible mientras se cargan los recursos
        await SplashScreen.preventAutoHideAsync();
        // Carga tus recursos
        await loadFonts();
        // Indica que la carga ha finalizado y actualiza el estado
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        // Oculta la pantalla de carga
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null; // No renderizar nada hasta que las fuentes estén cargadas
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen}
          options={{ headerShown: false }}  // Agrega esta línea para quitar la cabecera
        />
      </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={Toast.setRef} />
    </PaperProvider>
  );
};

export default App;
