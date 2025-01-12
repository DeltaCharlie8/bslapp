import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  return (
      // This is the launch screen when starting the app
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Welcome to Simple Signs!</Text>
        <Button
          title = "Sign Up"
        />
        <Button
          title = "Log In"
        />
        <Button
          title = "Continue as Guest"
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
});

export default App;