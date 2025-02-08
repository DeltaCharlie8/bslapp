import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import screens
import SignUp from './screens/signUp';
import Homepage from './screens/homepage';
import Login from './screens/login';
import Profile from './screens/profile';
import Library from './screens/library';
import Letters from './screens/letters';
import Numbers from './screens/numbers';

const Stack = createNativeStackNavigator();

// This is the launch screen when starting the app
const LaunchScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Welcome to Simple Signs!</Text>
      <Button 
        title="Sign Up" 
        onPress={() => navigation.navigate('signUp')}
      />
      <Button 
        title="Log In" 
        onPress={() => navigation.navigate('login')}
      />
      <Button 
        title="Continue as Guest" 
        onPress={() => navigation.navigate('homepage')}
      />
    </SafeAreaView>
  );
};

//these screens are stacked within the app
const App = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="launchScreen" 
          component={LaunchScreen} 
        />
        <Stack.Screen 
          name="signUp" 
          component={SignUp} 
        />
        <Stack.Screen 
          name="homepage" 
          component={Homepage} 
        />
        <Stack.Screen 
          name="login" 
          component={Login} 
        />
        <Stack.Screen 
          name="library" 
          component={Library} 
        />
        <Stack.Screen 
          name="profile" 
          component={Profile} 
        />
        <Stack.Screen 
          name="letters" 
          component={Letters} 
        />
        <Stack.Screen 
          name="numbers" 
          component={Numbers} 
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