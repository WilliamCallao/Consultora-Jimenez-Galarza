import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import FloatingNavbar from './FloatingNavbar';
import TaskCard from './TaskCard';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TaskCard />
        <FloatingNavbar navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default MainScreen;
