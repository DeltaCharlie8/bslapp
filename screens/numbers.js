import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, ScrollView, Alert, View, Text, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { findNumbers } from '../api';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const Numbers = () => {
    const numbers = {1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five",
      6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten",
      11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 15: "Fifteen",
      16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 19: "Nineteen", 20: "Twenty",
      21: "Twenty-One", 22: "Twenty-Two", 23: "Twenty-Three", 24: "Twenty-Four", 25: "Twenty-Five",
      26: "Twenty-Six", 27: "Twenty-Seven", 28: "Twenty-Eight", 29: "Twenty-Nine", 30: "Thirty"
    };
    const [videoURL, setVideoURL] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [videoStatus, setVideoStatus] = useState({});
    const navigation = useNavigation();

    //API for BSL Library (Numbers)
    const handleVideo = async (number) => {
      const num = numbers[number];
        const url = await findNumbers(num); // finds the URL of the video
          if (url) {
              setVideoURL(url); // this will update the URL to the current number pressed
              openVideoModal(); // this will play the video
              console.log(`'Video found for ${num}: `, url);
          } else {
              setVideoURL(url);
              console.log(`'Video not found for ${num}`);
          }
    };

    const openVideoModal = () => {setModalVisible(true); };
    const closeVideoModal = () => {setModalVisible(false); };

    return (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
              <StatusBar style="auto" />
              <Button title="Home" 
                  onPress={() => navigation.navigate('homepage')} />
              <Button title="Logout" 
                  onPress={() => {
                      Alert.alert('You have been logged out'); 
                      navigation.navigate("launchScreen");
                  }} />
              <Button 
                  title = "Return" onPress={() => navigation.goBack()}
              />
              {Object.keys(numbers).map((number) => (
                <Button title={number.toString()} key={number} onPress={() => handleVideo(number)} />
            ))}

            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={closeVideoModal}
          >
              <View style={styles.modalBackground}>
                  <View style={styles.modalContainer}>
                      <Text>Playing Video</Text>
                      <Video
                          source={{ uri: videoURL  }}
                          style={styles.videoPlayer}
                          controls={true}
                          shouldPlay={true}
                          resizeMode="contain"
                          onError={(e) => console.error('Video error: ', e)}
                          onPlaybackStatusUpdate={(status) => setVideoStatus(status)}  
                      />
                      <Button title="Close Video" onPress={closeVideoModal} />
                  </View>
              </View>
          </Modal>
          </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
  alignItems: 'center', // Center the buttons
  padding: 10, 
  },
  videoPlayer: {
    width: '100%',
    height: 300, // Adjust height as needed
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  });

export default Numbers