import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, ScrollView, Alert, View, Text } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { findVideo } from '../api';
import {Video} from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const Letters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [videoURL, setVideoURL] = React.useState('');
    const navigation = useNavigation();

    //API for videos
    const handleVideo = async (letter) => {
        const url = await findVideo(letter); //finds the url of the video
        if (url) {
            setVideoURL(url); //this will update the url to the current letter pressed
            console.log(`'Video found for ${letter}: `, url);
        } else {
            setVideoURL(url);
            console.log(`'Video not found for ${letter}`);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar style="auto" />
            <Button title = "Home" 
                onPress={() => navigation.navigate('homepage')}/>
            <Button title = "Logout" 
                onPress={() => {
                    Alert.alert('You have been logged out'); 
                    navigation.navigate("launchScreen");
                }}/>
            {alphabet.map((letter, index) => (
                <Button title = {letter} key = {index} onPress={() => handleVideo(letter)} />
            ))}

            {/* Show the video if a URL is available */}
            {videoURL && (
                    <View style={styles.videoContainer}>
                        <Text>Playing Video for Selected Letter:</Text>
                        <Video 
                            source={{ uri: videoURL}}
                            style={styles.videoPlayer}
                            controls={true}
                            resizeMode="contain"
                            onError={(e) => console.error('Video error: ', e)}
                            onLoad={() => console.log('Video loaded successfully')}
                        />
                    </View>
            )}
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Add padding to avoid any overlap with status bar
  },
  scrollContainer: {
    alignItems: 'center', // Centre the buttons
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
    height: '100%',
  },
});

export default Letters;
