import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const homepage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Button title = "BSL Library" />
            <Button title = "Quizzes" />
            <Button 
              title = "Profile" 
              onPress={() => navigation.navigate("profile")}
            />
            <Button title = "Settings" />
            <Button 
                title = "Logout" 
                onPress={() => navigation.navigate("launchScreen")}
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

export default homepage