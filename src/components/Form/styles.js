import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
    alignSelf: 'stretch',
    backgroundColor: '#00000029',
   // padding: 10,
    flex:1
    },

    container2: {
        //marginTop:'20%',
        alignSelf: 'stretch',
        padding: 10,
        flex:1
        },
    text:{
     
      alignItems:'center',
      margin:'8%',
    },
    pet:{
        fontFamily:'Cochin',
       fontSize:'30%',
       fontWeight: 'bold',
       color:'#C12B2B'
    },
    attention_text:{
        fontWeight:'bold'
    },
    attentionView:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:20,
        padding:8,
        backgroundColor:'#fda172',
       
    },
   
    breed:{
        margin:'3%',
        borderWidth:1,
        borderRadius:21,
        height:'7%',
        padding:10,
        borderColor:'black'
    },
    name:{
        margin:'3%',
        borderWidth:1,
        borderRadius:21,
        height:'7%',
        padding:10,
        borderColor:'black'
    },
    age:{
        marginRight:'13%',
        borderWidth:1,
        marginLeft:'4%',
        borderRadius:21,
        // height:'30%',
        width:'20%',
        padding:12,
        borderColor:'black',
        
    },
    gender:{
        borderWidth:1,
        borderRadius:21,
        width:'20%',
        padding:12,
    },
    Summary:{
        margin:'3%',
        borderWidth:1,
        borderRadius:21,
        height:'500%',
        // padding:10,
        borderColor:'black'
    },
    vaccine:{
        flexDirection:'row'
        
    }

});
export default styles;