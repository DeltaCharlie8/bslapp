import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const profile = ({navigation}) => {
    const [name, newName] = React.useState("Enter your Name");
    const [surname, newSurname] = React.useState("Enter your Surname");
    const [username, newUsername] = React.useState("Enter your Username");
    const [email, newEmail] = React.useState("Enter your Email");
    const [password, newPassword] = React.useState("Password");
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>This is your profile page</Text>
            <TextInput value={name} style={styles.input} onChangeText={newName}/>
            <TextInput value={surname} style={styles.input} onChangeText={newSurname}/>
            <TextInput value={username} style={styles.input} onChangeText={newUsername}/>
            <TextInput value={email} style={styles.input} onChangeText={newEmail}/>
            <TextInput value={password} style={styles.input} onChangeText={newPassword} secureTextEntry/>
            <Button 
                title = "Save Changes" 
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

export default profile