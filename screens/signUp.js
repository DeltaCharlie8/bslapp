import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import {addUser} from '../api';

const SignUp = ({ navigation }) => {
    const [name, newName] = React.useState("");
    const [surname, newSurname] = React.useState("");
    const [username, newUsername] = React.useState("");
    const [email, newEmail] = React.useState("");
    const [password, newPassword] = React.useState("");

      //API for sign up
      const handleSignUp = async () => {
        try {
            await addUser({
                name, surname, username, email, password,
            });
            Alert.alert('User added!');
            // Redirect after sign-up complete
            navigation.navigate('homepage');
        } catch (error) {
            console.error('Error during sign-up:', error);
            Alert.alert('Error: ', error.message);
        }
      };
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Create a Profile!</Text>
            <Text></Text>
            <Text>Enter your name</Text>
            <TextInput value={name} style={styles.input} onChangeText={newName} placeholder="Name"/>
            <Text>Enter your surname</Text>
            <TextInput value={surname} style={styles.input} onChangeText={newSurname} placeholder="Surname"/>
            <Text>Enter your username</Text>
            <TextInput value={username} style={styles.input} onChangeText={newUsername} placeholder="Username"/>
            <Text>Enter your email</Text>
            <TextInput value={email} style={styles.input} onChangeText={newEmail} placeholder="Email"/>
            <Text>Enter your password</Text>
            <TextInput value={password} style={styles.input} onChangeText={newPassword} placeholder="Password" secureTextEntry/>
            <Button 
                title = "Submit" 
                onPress={handleSignUp}
            />
            <Button 
                title = "Cancel" 
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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

export default SignUp