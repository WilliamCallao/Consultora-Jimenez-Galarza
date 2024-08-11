// CustomCard.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

const CustomCard = ({ title, subtitle, buttonText, children }) => {
    const handlePress = () => {
        Toast.show({
          type: 'success', // Puedes cambiar el tipo por error, info, etc. según necesites
          text1: title,
          text2: 'Action was successfully performed!',
          visibilityTime: 4000, // Duración de cómo el toast es visible
        });
      };
  
    return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {children}
      </Card.Content>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <Icon name="arrow-forward" size={24} color="#000" style={styles.icon} />
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    margin: 15,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'SFUIDisplay-Bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#84888F',
    marginBottom: 10,
    fontFamily: 'SFUIDisplay-Medium'
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFD700',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'SFUIDisplay-Bold',
    color: '#000',
  },
});

export default CustomCard;
