import { View, Text, StyleSheet, Pressable, Modal, Switch, Alert,Image, ScrollView } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as database from '../../../database'

export default function Pet(props) {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
    }

    const handleStatusChangePress = () => {
        props.onStatusChange(props.pet.id);
    }

    const handleRemovePress = () => {
        Alert.alert(
            'Remove Pet',
            'This action will permanently delete this Recipe. This action cannot be undone!', [
            {
                text: 'Confirm',
                onPress: () => {
                    props.onPetRemoval(props.pet.id);

                    19
                    //delete from database
                    database.remove(id = props.pet.id)
                    setShowModal(false);
                }
            },
            {
                text: 'Cancel'
            }
        ]);
    }

    return (
        <>
            <Pressable onPress={handleModalToggle}>
                <View style={styles.container}>

                    <View style={styles.icon}>

                       <Image style={{height:60,width:60,borderRadius:15}} source={require('./food.png')} />
                       
                        <View style={styles.description}>
                            <Text style={styles.textStyle}>{props.pet.description}</Text>
                            <Text style={styles.textstatus}>{props.pet.done ? 'Veg' : 'Non Veg'}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>

            <Modal backdropOpacity={0.3} visible={showModal}>

                <View style={styles.modal}>
                    <Pressable style={styles.crossButton} onPress={handleModalToggle}>     
                    <Entypo name="cross" size={34} color="#C12B2B" />
                    </Pressable>

                    <Text style={styles.breed}>{props.pet.description}</Text>
                    <Text style={styles.name}>{props.pet.name}</Text>
                    <Image style={styles.image} source={require('./food.png')} />
                    <View style={styles.descriptionAlignment}>
                        <Text style={styles.age}>{props.pet.age}</Text>
                        <Text style={styles.gender}>{props.pet.gender}|</Text>
                        <Text>{props.pet.done ? 'Veg' : 'Non veg'}</Text>
                    </View>
                    <Text style={styles.info}>About Recipe</Text>
                    <ScrollView>
                    <Text style={styles.summary}>{props.pet.summary}</Text>  
                    </ScrollView>       
                </View>
            </Modal>
        </>
    );
}
