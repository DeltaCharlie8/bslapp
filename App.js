import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import signUp from './screens/signUp';

const Stack = createNativeStackNavigator();

// This is the launch screen when starting the app
const launchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Welcome to Simple Signs!</Text>
      <Button 
        title="Sign Up" 
        onPress={() => navigation.navigate('signUp')}
      />
      <Button title="Log In" />
      <Button title="Continue as Guest" />
    </View>
  );
};

const App = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="launchScreen" 
          component={launchScreen} 
        />
        <Stack.Screen 
          name="signUp" 
          component={signUp} 
        />
      </Stack.Navigator>
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