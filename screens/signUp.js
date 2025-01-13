import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const signUp = () => {
  return (
      // This is the launch screen when starting the app
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Create a Profile!</Text>
          <TextInput value={text} placeholder='Name'/>
          <TextInput value={text} placeholder='Surname'/>
          <TextInput value={text} placeholder='Username'/>
          <TextInput value={text} placeholder='Email'/>
          <TextInput value={text} placeholder='Password'/>
          <Button title = "Submit" />
          <Button title = "Cancel" />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default signUp