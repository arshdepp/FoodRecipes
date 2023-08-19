// import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Pet from './Pet/Pet';
import Header from '../Header/Header';
import styles from './styles';

export default function Pets(props) {
  const navigation = useNavigation();

  const navigateToForm = () => {
    navigation.navigate('Form');
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {props.pets.length === 0 ? (
          <View style={styles.message}>
            <Text>No Pets Found!</Text>
          </View>
        ) : (
          props.pets.map((pet, index) => (
            <Pet key={index} pet={pet} onStatusChange={props.onStatusChange} onPetRemoval={props.onPetRemoval} />
          ))
        )}
      </ScrollView>
      <TouchableOpacity onPress={navigateToForm}>
        {/* <Feather name="plus" size={24} color={'red'} /> */}
        <Ionicons name="add-circle" size={54} color="#C12B2B" style={{marginLeft:'84%'}} />
      </TouchableOpacity>
    </View>
  );
}
