import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Button, Alert, Text } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Library = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text>Choose a topic</Text>
            <Button title = "Letters" 
                onPress={() => navigation.navigate('letters')}/>
            <Button title = "Numbers" 
                onPress={() => navigation.navigate('numbers')}/>
            <Button title = "Home" 
                onPress={() => navigation.navigate('homepage')}/>
            <Button title = "Logout" 
                onPress={() => {
                    Alert.alert('You have been logged out'); 
                    navigation.navigate("launchScreen");
                }}
            />
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
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Library