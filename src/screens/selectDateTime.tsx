import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';  // Import the useNavigation hook

const selectDateTime = () => {
  const navigation = useNavigation();  // Get navigation object

  const [selectedDate, setSelectedDate] = useState(1); // Default date selection
  const [selectedTime, setSelectedTime] = useState('Midday'); // Default time selection

  const dates = [
    { day: 'SAT', date: 1, month: 'JUN' },
    { day: 'SUN', date: 2, month: 'JUN' },
    { day: 'MON', date: 3, month: 'JUN' },
    { day: 'TUE', date: 4, month: 'JUN' },
    { day: 'WED', date: 5, month: 'JUN' },
    { day: 'Thu', date: 6, month: 'JUN' },
    { day: 'FRI', date: 7, month: 'JUN' },
  ];

  const times = ['Morning', 'Midday', 'Afternoon'];

  return (
    <View style={styles.container}>
      {/* Card Wrapper */}
      <View style={styles.card}>

        {/* Dummy Image in Top-Left Corner */}
        <Image
          style={styles.dummyImage}
          source={{ uri: 'https://w7.pngwing.com/pngs/739/165/png-transparent-marketing-for-dummies-the-endocrine-system-book-game-book-game-logo-casino-thumbnail.png' }} // Dummy image link
        />
  <View style={styles.headtextView}>
        <Text style={styles.headerText}>
          Please select the date and time for your service appointment
        </Text>
        </View>
        {/* Top Row with Close Button */}
        {/* <View style={styles.topRow}>
          <TouchableOpacity style={styles.closeButton} onPress={() => alert('Close pressed')}>
            <Icon name="close" size={24} color="black" />
          </TouchableOpacity>
        </View> */}

        {/* Header Text */}
      
        {/* Date Selection */}
        <FlatList
          horizontal
          data={dates}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dateItem,
                selectedDate === item.date && styles.selectedDate,
              ]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text style={styles.dayText}>{item.day}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.monthText}>{item.month}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.date.toString()}
          showsHorizontalScrollIndicator={false}
        />

        {/* Time Selection */}
        <Text style={styles.availableHoursText}>Available hours</Text>
        <View style={styles.timeContainer}>
          {times.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeButton,
                selectedTime === time && styles.selectedTime,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={styles.timeText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}   onPress={() => navigation.navigate('Appointment')} >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // This will be outside the card
    backgroundColor: 'black',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10, // Adds margin around the card from the borders of the screen
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  dummyImage: {
    // position: 'absolute',
    top: 20, // Position 20 units from top
    left: 20, // Position 20 units from left
    width: 60, // Width of the image
    height: 60, // Height of the image
    borderRadius: 5, // Optional: Makes the image circular
  },
  topRow: {
    // flexDirection: 'row',
    justifyContent: 'flex-end', // Push the close button to the right
    alignItems: 'center',
    marginBottom: 20,
  },
  headtextView:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    width:'100%'
  },
  closeButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black',
    paddingLeft:25,
    paddingRight:25
  },
  dateItem: {
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
    width:55
  },
  selectedDate: {
    backgroundColor: '#FF7F3F',
  },
  dayText: {
    fontSize: 12,
    color: '#888',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  monthText: {
    fontSize: 12,
    color: '#888',
  },
  availableHoursText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    // textAlign: 'center',
    color:'black'
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  timeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  selectedTime: {
    backgroundColor: '#FF7F3F',
  },
  timeText: {
    fontSize: 16,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#008000',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default selectDateTime;
