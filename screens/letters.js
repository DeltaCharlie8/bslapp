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
    const [videoStatus, setVideoStatus] = useState({}); // To track the video status
    const navigation = useNavigation();

    // API for videos
    const handleVideo = async (letter) => {
        const url = await findVideo(letter); // finds the URL of the video
        if (url) {
            setVideoURL(url); // this will update the URL to the current letter pressed
            openVideoModal();
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
                    title = "Return" 
                    onPress={() => navigation.goBack()}
                />
                {alphabet.map((letter, index) => (
                    <Button title={letter} key={index} onPress={() => handleVideo(letter)} />
                ))}

                {/* Show the video if a URL is available */}
                {videoURL && (
                    <View style={styles.videoContainer}>
                        <Video 
                            source={{ uri: videoURL }}
                            style={styles.videoPlayer}
                            shouldPlay={true}  // Ensure video starts playing when loaded
                            resizeMode="contain"
                            onError={(e) => console.error('Video error: ', e)}
                            onLoad={() => console.log('Video loaded successfully')}
                            onPlaybackStatusUpdate={(status) => setVideoStatus(status)}  // Track video status
                        />
                    </View>
                )}

                <Button title="Video" onPress={openVideoModal} /> {/* Video button */}

                {/* Video Modal */}
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={closeVideoModal}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            {/* Wrapping "Playing Video" in Text component */}
                            <Text>Playing Video</Text>
                            <Video
                                source={{ uri: videoURL || 'https://media.signbsl.com/videos/bsl/signstation/c.mp4' }} // Default URL if no video is found
                                style={styles.videoPlayer}
                                controls={true}
                                shouldPlay={true}
                                resizeMode="contain"
                                onError={(e) => console.error('Video error: ', e)}
                                onPlaybackStatusUpdate={(status) => setVideoStatus(status)}  // Track video status
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
    paddingTop: 20, // Add padding to avoid any overlap with the status bar
  },
  scrollContainer: {
    alignItems: 'center', // Center the buttons
    padding: 10, // Add some padding around the buttons
  },
  videoContainer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  videoPlayer: {
    width: '100%',
    height: 300, // Adjust height as needed
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent background for modal
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
