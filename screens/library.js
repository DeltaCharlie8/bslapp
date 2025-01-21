import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';

const Library = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Choose a topic</Text>
            <StatusBar style="auto" />
            <Button title = "Letters" 
                onPress={() => {Alert.alert('Letters has been pressed')}}/>
            <Button title = "Numbers" 
                onPress={() => {Alert.alert('Numbers has been pressed')}}/>
            <Button title = "Logout" 
                onPress={() => {
                    Alert.alert('You have been logged out'); 
                    navigation.navigate("launchScreen");
                }}
            />
        </View>
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