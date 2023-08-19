import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
    alignSelf: 'stretch',
   
    margin: 10,
    padding: 15,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#C12B2B',
    flexDirection:'row',
    textAlign:'center',
},
textStyle:{
    // color:"#C12B2B",
    fontSize:15,
    fontWeight:'bold'
},
textid:{
    fontSize:13,
    
},
textstatus:{
   fontWeight:'bold'
},
description:{
    //paddingRight:20,
    marginLeft:'10%'
    
},
icon:{
    paddingRight:"3%",
    marginTop:"3%",
   
    flexDirection:'row',
    justifyContent:'space-evenly'
    
},
breed:{
    color:"#C12B2B",
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center'
    // marginTop:'5%',
},
summary:{
    margin:'5%',
    fontSize:15,
    alignSelf:'center'
    // marginTop:'5%',
},
name:{
    //color:"#fda172",
    margin:'5%',
    fontSize:15,
    marginTop:'5%',
    alignSelf:'flex-start',
    borderWidth:1
    // marginTop:'5%',
},
name:{
    //color:"#fda172",
    fontSize:15,
    margin:'5%',
    alignSelf:'flex-start'
    // marginTop:'5%',
},
info:{
    //color:"#fda172",
    fontSize:15,
    margin:'5%',
    alignSelf:'flex-start',
    color:'#C12B2B',
    // marginTop:'5%',
},
image:{
//    margin:'5%'
marginLeft:'8%',
marginBottom:'5%',
borderRadius:15,
height:'20%',
width:'80%'
},

modal:{
    borderRadius:15,
    //padding:'5%',
    width:'90%',
    height:'85%',
    shadowColor:'black',
   // backgroundColor:'#4A4A4ABC',
    marginTop:'15%',
    alignSelf:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
},
crossButton:{
   marginLeft:'87%',
   marginTop:'3%'

},
button:{
    flexDirection:'row'
},
button2:{
    flexDirection:'column'
},
textRemove:{
    color:'red'
},
descriptionAlignment:{
    flexDirection:'row',
   
},
toggleAlignment:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'20%'
}
});

export default styles;