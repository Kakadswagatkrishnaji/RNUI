import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeCareScheduler = () => {
  return (
    <View style={styles.container}>
      {/* Close button */}
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      {/* Title and Subtitle */
      }
      <View style={{alignItems:'center',marginTop:100}}>
      <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.title}>Home Care Scheduler</Text>

      </View>
      </View>
      
      <Text style={styles.subtitle}>Let's handle your home to-dos.</Text>

      {/* Answer 3 Questions Button */}
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonPrimaryText}>Answer 3 questions to refine your list</Text>
        <View style={styles.buttonIcon}>
          <Text style={styles.arrow}>></Text>
        </View>
      </TouchableOpacity>

      {/* Get Inspired Button */}
      <TouchableOpacity style={styles.buttonSecondary}>
        <View>
        <Text style={styles.buttonSecondaryText}>Need a place to start?</Text>
        <Text style={styles.buttonSubtitle}>Get inspired with us</Text>
        </View>
        <View style={styles.buttonIcon}>
          <Text style={styles.arrow}>></Text>
        </View>
      </TouchableOpacity>

      {/* Decorative Elements */}
      <View style={styles.decorative}>
      <Image
        source={require('C:\Users\SWAGAT KAKAD\Desktop\ReactNative\assignmentTask\src\assets\image.png')} // Update the path based on your folder structure
        style={styles.image}
        resizeMode="contain" // Adjust resizeMode if needed
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7', // Light background color similar to the image
    // justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#F1F1F1',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 28,
    color: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginBottom: 30,
  },
  buttonPrimary: {
    backgroundColor: '#1F7D43',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    fontWeight:'bold',
    width:'40%'

  },
  buttonSecondary: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#333',
    fontSize: 16,
    fontWeight:'bold',
    flex: 1,
  },
  buttonSubtitle: {
    color: '#777',
    fontSize: 12,
  },
  buttonIcon: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  arrow: {
    fontSize: 18,
    color: '#000',
  },
  decorative: {
    // Add your decorative styles here to replicate the circles from the image
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
    marginBottom: 30,
  },
});

export default HomeCareScheduler;
