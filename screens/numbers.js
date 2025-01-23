import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert, Text } from 'react-native';

const Numbers = async () => {
    //API for BSL Library (Numers)
        const findNumbers = async () => {};

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
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

export default Numbers