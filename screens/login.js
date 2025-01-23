import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, Button, TextInput, Alert } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { loginUser } from '../api';

const Login = ({navigation}) => {
    const [username, newUsername] = React.useState("");
    const [password, newPassword] = React.useState("");

      //API for login
      const handleLogin = async () => {
        // If submit is pressed with no details entered
        if (!username || !password) {
          Alert.alert('Please enter a username and password')
        }
        try {
            await loginUser({ username, password,});
            Alert.alert('Welcome back ' + username + '!');
            // Redirect after log in complete
            navigation.navigate('homepage');
        } catch (error) {
            console.error('Error during login:', error);
            Alert.alert('Error: ', error.message);
        }
      };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text>Log into your Profile!</Text>
            <TextInput value={username} style={styles.input} onChangeText={newUsername} placeholder="Username"/>
            <Text>Enter your password</Text>
            <TextInput value={password} style={styles.input} onChangeText={newPassword} placeholder="Password" secureTextEntry/>
            <Button 
                title = "Submit" 
                onPress={handleLogin}
            />
            <Button 
                title = "Cancel" 
                onPress={() => navigation.goBack()}
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

export default Login