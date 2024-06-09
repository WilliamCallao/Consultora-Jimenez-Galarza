import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Provider as PaperProvider } from 'react-native-paper';
import { db } from './firebaseConfig';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('Registros').get();
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const addItem = async () => {
    if (inputValue.trim() === '') return;
    await db.collection('Registros').add({ campo: inputValue });
    setInputValue('');
    const snapshot = await db.collection('Registros').get();
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setData(items);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Registros</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Campo"
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.input}
          />
          <Button mode="contained" onPress={addItem} style={styles.button}>
            Agregar
          </Button>
        </View>
        {data.map(item => (
          <Text key={item.id} style={styles.itemText}>{item.campo}</Text>
        ))}
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
  button: {
    height: 50,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default App;
