import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet,View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  const navigation = useNavigation();
  const navigateToLogout = () => {
        navigation.navigate('Logout');
      };
  return (
<View style={styles.container}>
<Text style={styles.text}>Food Recipes</Text>

<TouchableOpacity onPress={navigateToLogout}>
<AntDesign name="logout" size={24} color="black" style={{marginLeft:'6%',marginTop:'-5%',color:'white'}}/>
  <Text style={{marginLeft:'13%',marginTop:'-5%',color:'white'}}>Logout</Text>
</TouchableOpacity>
</View>
  );
}

