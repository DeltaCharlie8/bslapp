import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      // This is the launch screen when starting the app
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Welcome to Simple Signs!</Text>
          <Button title = "Sign Up" />
          <Button title = "Log In" />
          <Button title = "Continue as Guest" />
        </View>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;