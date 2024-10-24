// AddPatientRecord.js
import React ,{useState }from'react' ;
import{View , Text , TextInput , TouchableOpacity , StyleSheet }from'react-native' ;
import axios from'axios' ;

const API_URL ='http://your-api-ip :3001' ;// Replace with your API's IP and port

const AddPatientRecord =({route ,navigation })=>{
   const{patientId }=route.params ;
   const[bloodPressure ,setBloodPressure ]=useState('') ;
   const[respiratoryRate ,setRespiratoryRate ]=useState('') ;
   const[bloodOxygenLevel ,setBloodOxygenLevel ]=useState('') ;

   const handleSubmit =async() =>{
     try{
       await axios.post(`${API_URL}/api/patients/${patientId}/records`,{
         bloodPressure ,
         respiratoryRate ,
         bloodOxygenLevel ,
       }) ;
       navigation.goBack() ;
     }catch(error){
       console.error('Error adding patient record :' ,error) ;
     }
   };

return(
<View style ={styles.container }>
<Text style ={styles.title }>Add New Clinical Record</ Text >
<TextInput 
style ={styles.input }
placeholder ="Blood Pressure (e.g.,120/80 mmHg)"
value ={bloodPressure }
onChangeText ={setBloodPressure }
/>
<TextInput 
style ={styles.input }
placeholder ="Respiratory Rate (e.g.,16/min)"
value ={respiratoryRate }
onChangeText ={setRespiratoryRate }
/>
<TextInput 
style ={styles.input }
placeholder ="Blood Oxygen Level (e.g.,98%)"
value ={bloodOxygenLevel }
onChangeText ={setBloodOxygenLevel }
/>
<TouchableOpacity style ={styles.button }onPress ={handleSubmit }>
<Text style ={styles.buttonText }>Save Record</ Text >
</TouchableOpacity >
</View >
);
};

const styles =StyleSheet.create({
container:{
flex :1,
paddingHorizontal :20,
backgroundColor :'#f5f5f5',
},
title:{
fontSize :24,
fontWeight :'bold',
marginBottom :20,
},
input:{
backgroundColor :'white',
paddingHorizontal :10,
paddingVertical :8,
marginBottom :10,
borderRadius :5,
},
button:{
backgroundColor :'blue',
paddingVertical :12,
borderRadius :5,
alignItems :'center',
},
buttonText:{
color :'white',
fontSize :16,
fontWeight :'bold',
},
});

export default AddPatientRecord;