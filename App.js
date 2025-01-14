import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import screens
import signUp from './screens/signUp';
import homepage from './screens/homepage';
import login from './screens/login';
import profile from './screens/profile';

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
      <Button 
        title="Log In" 
        onPress={() => navigation.navigate('login')}
      />
      <Button 
        title="Continue as Guest" 
        onPress={() => navigation.navigate('homepage')}
      />
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
        <Stack.Screen 
          name="homepage" 
          component={homepage} 
        />
        <Stack.Screen 
          name="login" 
          component={login} 
        />
        <Stack.Screen 
          name="profile" 
          component={profile} 
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