import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const signUp = () => {
  return (
      // This is the launch screen when starting the app
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Create a Profile!</Text>
        <TextInput placeholder='Name'/>
        <TextInput placeholder='Surname'/>
        <TextInput placeholder='Username'/>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Password' secureTextEntry/>
        <Button title = "Submit" />
        <Button title = "Cancel" />
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

export default signUp