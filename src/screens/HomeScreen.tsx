import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';  // Import the useNavigation hook

const HomeScreen = () => {
    const navigation = useNavigation();  // Get navigation object

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('selectDateTime')}>
        <Text style={styles.buttonText}>Task 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button } onPress={() => navigation.navigate('ProductsList')}>
        <Text style={styles.buttonText}>Task 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // 
    backgroundColor: '#fff', 
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    marginVertical: 10, 
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000', 
    fontSize: 16,
    fontWeight:'bold'
  },
});

export default HomeScreen;
