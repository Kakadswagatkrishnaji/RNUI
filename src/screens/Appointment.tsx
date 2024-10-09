import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Update import
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Update import

const AppointmentScreen = () => {
  const [selectedTab, setSelectedTab] = useState('InProgress');

  const appointments = [
    {
      id: '1',
      jobId: 'Job#19057',
      title: 'Install Garage Organizers',
      date: '1',
      month: 'JAN',
      description:
        'Your appointment at Hephaestus renovation has been scheduled.',
    },
    {
      id: '2',
      jobId: 'Job#19002',
      title: 'One Time interior house cleaning',
      date: '16',
      month: 'JAN',

      description:
        'Your appointment at Hephaestus renovation has been scheduled.',
    },
  ];

  const renderAppointment = ({item}) => (
    <ScrollView style={styles.appointmentCard}>
      <View style={styles.appointmentHeader}>
        <View>
        <Text style={styles.jobId}>{item.jobId}</Text>
        <View style={{width: '80%'}}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.monthText}>{item.month}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
   
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.dummyImage}
            source={{
              uri: 'https://w7.pngwing.com/pngs/831/26/png-transparent-telephone-logo-telephone-call-computer-icons-symbol-phone-miscellaneous-cdr-text-thumbnail.png',
            }} // Dummy image link
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.dummyImage}
            source={{
              uri: 'https://w7.pngwing.com/pngs/208/277/png-transparent-message-illustration-computer-icons-email-text-messaging-icon-envelope-drawing-miscellaneous-angle-white-thumbnail.png',
            }} // Chat icon
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.dummyImage}
            source={{
              uri: 'https://w7.pngwing.com/pngs/985/730/png-transparent-calendar-computer-icons-calendar-date-calendar-icon-miscellaneous-angle-text-thumbnail.png',
            }} // Calendar icon
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Appointment</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'InProgress' && styles.selectedTab,
          ]}
          onPress={() => setSelectedTab('InProgress')}>
          <Text style={styles.tabText}>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Done' && styles.selectedTab,
          ]}
          onPress={() => setSelectedTab('Done')}>
          <Text style={styles.tabText}>Done</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={appointments}
        renderItem={renderAppointment}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNavBar}>
      <TouchableOpacity style={styles.navButton}>
          <Image
            style={[styles.NavImage,{height:25,width:25}]}
            source={{
              uri: 'https://w7.pngwing.com/pngs/400/435/png-transparent-house-computer-icons-home-automation-kits-silhouette-figures-angle-building-text-thumbnail.png',
            }} // Calendar icon
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            style={styles.NavImage}
            source={{
              uri: 'https://w7.pngwing.com/pngs/985/730/png-transparent-calendar-computer-icons-calendar-date-calendar-icon-miscellaneous-angle-text-thumbnail.png',
            }} // Calendar icon
          />
        </TouchableOpacity><TouchableOpacity style={styles.navButton}>
          <Image
            style={styles.NavImage}
            source={{
              uri: 'https://w7.pngwing.com/pngs/413/779/png-transparent-black-person-symbol-art-computer-icons-user-profile-avatar-profile-heroes-profile-user-interface-thumbnail.png',
            }} // Calendar icon
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
    // marginHorizontal: 10,
    width:'45%',
    alignItems:'center'
  },
  selectedTab: {
    backgroundColor: '#008000',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    margin: 5,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobId: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  dateContainer: {
    backgroundColor: '#FF7F3F',
    borderRadius: 20,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  dateText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  monthText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  dummyImage: {
    // position: 'absolute',
    top: 20, 
    left: 20, 
    width: 20, 
    height: 20,
    borderRadius: 5,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 35,
    marginBottom: 20,
  },
  iconButton: {
    // backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 20,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  navButton: {
    padding: 10,
  },
  NavImage:{
    height:20,
    width:20
  }
});

export default AppointmentScreen;
