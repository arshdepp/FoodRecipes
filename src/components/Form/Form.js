import { View, Text, TextInput, Switch, Button ,Keyboard, ScrollView,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import styles from './styles';
import * as database from '../../database';
import Header from '../Header/Header';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Form(props) {
    const navigation = useNavigation();
    const [petDescription, setPetDescription] = useState('');
    const [petName, setPetName] = useState('');
    const [age, setAge] = useState('');
    const [summary, setSummary] = useState('');
    const [gender,setGender] = useState('');
    const [petDone, setPetDone] = useState(false);
    const [errorMessage,setErrorMessage] = useState(null);
    
    const handleAddPress = async () => { 
        if(petDescription){
            props.onAddPet(petDescription, petDone,petName,age,summary,gender);
            console.log('Button pressed');
            console.log('Description:', petDescription);
            console.log('Done:', petDone);

            setErrorMessage(null);
            setPetDescription('');
            setPetDone(false);
            setPetName('');
            setAge('');
            setSummary('');
            setGender('');

            Keyboard.dismiss();
            const data ={
                description:petDescription,
                done:petDone,
                name:petName,
                age:age,
                summary:summary,
                gender:gender
            }
            //console.log(data,'kwjnwnclwenlw')
           const id = await database.save(data);
           console.log('IDDDDDDDD',id)
           data.id = id
           console.log('saved data', data)
        }
        else{
            setErrorMessage('feilds are required.')
        }
     
    }
    const handleDescriptionChange = (value) => {
        setPetDescription(value);
    }

    const handleNameChange = (value) => {
        setPetName(value);
    }

    const handleStatusChange = (value) => {
        setPetDone(value);
    }
    const handleAgeChange = (value) => {
        setAge(value);
    }
    const handleSummaryChange = (value) => {
        setSummary(value);
    }
    const handleGenderChange = (value) => {
        setGender(value);
    }
    const handleBack = () => {
        navigation.navigate("list pets");
      };
   
        
    return (
       
        
        <View style={styles.container}>
            <Header/>
            <TouchableOpacity onPress={handleBack}>
            <AntDesign name="left" size={34} color="black" />
            </TouchableOpacity>
            {errorMessage && (
                <View style={styles.attentionView} >
                <Text style={styles.attention_text}>Attention:</Text>
                <Text>{errorMessage}</Text>
                </View>
            )}
            
           <View style={styles.container2}>
           <View style={styles.text}>
           <Text style={styles.pet}>Add Your Recipe</Text>
           </View>
            <TextInput style={styles.breed}
                placeholder='Enter a Recipe Name'
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={petDescription}
            />
             <TextInput style={styles.name}
                placeholder='Enter a cuisine'
                maxLength={150}
                onChangeText={handleNameChange}
                defaultValue={petName}
            />
            <View style={styles.vaccine}>
            <TextInput style={styles.age}
                placeholder='Time'
                maxLength={150}
                onChangeText={handleAgeChange}
                defaultValue={age}
            />
             {/* <TextInput style={styles.gender}
                placeholder='gender'
                maxLength={150}
                onChangeText={handleGenderChange}
                defaultValue={gender}
            /> */}
            
                <Text>Veg:</Text>
                <Switch 
                value={petDone}
                onValueChange={handleStatusChange}
                />
            </View>
            
            <ScrollView >
            <TextInput style={styles.Summary} 
                placeholder='Description about Recipe'
                maxLength={15000}
                onChangeText={handleSummaryChange}
                defaultValue={summary}
            />
            </ScrollView>
            <Button title='Submit' color={'#C12B2B'}
                onPress={handleAddPress}
            />
            </View>

        </View>
    );
}