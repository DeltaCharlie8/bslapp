import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Button, ScrollView, Alert } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { findVideo } from '../api';

const Letters = ({navigation}) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    //API for videos
    const handleVideo = async (letter) => {
        const url = await findVideo(letter); //returns the url of the video
        if (url) {
            setVideoUrl(url); //this will update the url to the current letter pressed
            console.log('Video found! letters.js')
        } else {
            setVideoUrl(url);
            console.log('Video not found! letters.js')
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
                <Button title = {letter} 
                    key = {index}
                    onPress={() => {
                        console.log(letter);
                        Alert.alert(`You have pressed ${letter}`);
;                    }}
                />
            ))}
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
});

export default Letters;
