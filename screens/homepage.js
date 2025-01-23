import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

const Homepage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Button title = "BSL Library" 
              onPress={() => navigation.navigate("library")}
            />
            {/*<Button title = "Quizzes" />*/ /*this will be active once MVPs are met*/} 
            <Button title = "Profile" 
              onPress={() => navigation.navigate("profile")}
            />
            {/*<Button title = "Settings" />*/ /*this will be active once MVPs are met*/}
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

export default Homepage