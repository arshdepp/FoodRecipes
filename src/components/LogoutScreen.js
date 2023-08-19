import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AntDesign } from '@expo/vector-icons';

const LogoutScreen = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,margin:'10%'}}>you are successfully Logout!</Text>
      <AntDesign name="checkcircle" size={100} color="green" />
      {/* <Button title="Logout" onPress={handleLogout} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoutScreen;
