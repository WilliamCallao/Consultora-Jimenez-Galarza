import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImageCircles from './ImageCircles';

const TaskCard = () => {
  const images = [
    'https://via.placeholder.com/100x100.png?text=1',
    'https://via.placeholder.com/100x100.png?text=2',
    'https://via.placeholder.com/100x100.png?text=3',
    'https://via.placeholder.com/100x100.png?text=4',
  ];

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topSection}>
        <ImageCircles images={images} />
        <Text style={styles.dateText}>Today</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.title}>Brand book design</Text>
        <Text style={styles.subtitle}>Design Team (USA)</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.timeContainer}>
          <Icon name="alarm" size={20} color="#FFF" />
          <Text style={styles.timeText}>3:00 PM</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Icon name="arrow-forward" size={24} color="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 40,
    padding: 10,
    // marginBottom: 20,
    width: '95%',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    color: '#AAA',
    fontSize: 14,
  },
  middleSection: {
    marginVertical: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#AAA',
    fontSize: 14,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  timeText: {
    color: '#FFF',
    marginLeft: 5,
    fontSize: 14,
  },
  arrowContainer: {
    backgroundColor: '#FFF176',
    padding: 10,
    borderRadius: 50,
  },
});

export default TaskCard;
