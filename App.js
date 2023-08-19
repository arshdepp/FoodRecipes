import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo } from '@expo/vector-icons';
import * as database from './src/database';
import SignupScreen from './src/components/SignupScreen';
import Header from './src/components/Header/Header';
import Pets from './src/components/Pets/Pets';
import Form from './src/components/Form/Form';
import uuid from 'react-uuid';
import Main from './src/components/Main';
import LogoutScreen from './src/components/LogoutScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await database.load();
      setPets(data);
    })();
  }, []);

  const handleAddPet = (petDescription, petDone, petName, age, summary, gender) => {
    const updatedPets = [...pets];
    updatedPets.push({
      id: uuid.id,
      description: petDescription,
      done: petDone,
      name: petName,
      age: age,
      summary: summary,
      gender: gender,
    });
    setPets(updatedPets);
  };

  const handleStatusChange = (id) => {
    const updatedPets = pets.map((pet) => {
      if (pet.id === id) {
        pet.done = !pet.done;
        database.update(id, { done: !pet.done });
      }
      return pet;
    });
    setPets(updatedPets);
  };

  const handlePetRemoval = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#C12B2B' }}>
        <Tab.Screen name="Signup" component={SignupScreen} options={{ title: '',
        tabBarIcon: ({ focused, color, size }) => {
          return <Feather name="list" size={2} color={color} />;
        
        },
      }}/>

      <Tab.Screen name="Logout" component={LogoutScreen} options={{ title: '',
        tabBarIcon: ({ focused, color, size }) => {
          return <Feather name="list" size={2} color={color} />;
        },
      }}/>
        
        <Tab.Screen
            name="list pets"
            options={{
              title: '',
              tabBarIcon: ({ focused, color, size }) => {
                return <Feather name="list" size={2} color={color} />;
              },
            }}>
            {(props) => <Pets {...props} pets={pets} onStatusChange={handleStatusChange} onPetRemoval={handlePetRemoval} />}
          </Tab.Screen>
          
          <Tab.Screen
            name="Form"
            options={{
              title: '',
              tabBarIcon: ({ focused, color, size }) => {
                return <Entypo name="add-to-list" size={2} color={color} />;
              },
            }}>
            {(props) => <Form {...props} onAddPet={handleAddPet} />}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
