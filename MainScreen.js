import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapBackground from './MapBackground';
import CustomCard from './CustomCard';
import FloatingNavbar from './FloatingNavbar'; // Importa el componente de barra de navegación

const MainScreen = ({ navigation }) => { // Asegúrate de pasar navigation si usas react-navigation
  return (
    <MapBackground>
      <View style={styles.container}>
        <View>
          
        </View>
        <CustomCard
          title="Gate 1C"
          subtitle="Airport Infrastructure"
          buttonText="Build a route"
        >
          <Text>Additional content can go here.</Text>
        </CustomCard>
        <FloatingNavbar navigation={navigation} />
      </View>
    </MapBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ajusta el contenido para que la barra de navegación no sobrepase otros elementos
    paddingBottom: 50, // Añade algo de padding en la parte inferior para evitar solapamientos
  }
});

export default MainScreen;
