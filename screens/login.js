import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const login = ({navigation}) => {
    const [username, newUsername] = React.useState("Enter your Username");
    const [password, newPassword] = React.useState("Password");
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Log into your Profile!</Text>
            <TextInput value={username} style={styles.input} onChangeText={newUsername}/>
            <Text>Enter your password</Text>
            <TextInput value={password} style={styles.input} onChangeText={newPassword} secureTextEntry/>
            <Button 
                title = "Submit" 
                onPress={() => navigation.navigate("homepage")}
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

export default login