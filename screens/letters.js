import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, ScrollView, Alert, View, Text, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { findVideo } from '../api';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const Letters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [videoURL, setVideoURL] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [videoStatus, setVideoStatus] = useState({});
    const navigation = useNavigation();

    // API for videos
    const handleVideo = async (letter) => {
        const url = await findVideo(letter); // finds the URL of the video
        if (url) {
            setVideoURL(url); // this will update the URL to the current letter pressed
            openVideoModal(); // this will play the video
            console.log(`'Video found for ${letter}: `, url);
        } else {
            setVideoURL(url);
            console.log(`'Video not found for ${letter}`);
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
                {alphabet.map((letter, index) => (
                    <Button title={letter} key={index} onPress={() => handleVideo(letter)} /> // creates buttons for each letter
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
    paddingTop: 20, 
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

export default Letters;
