// AddPatient.js
import React ,{useState }from'react' ;
import{View , Text , TextInput , TouchableOpacity , StyleSheet , ScrollView }from'react-native' ;
import axios from'axios' ;

const API_URL ='http://your-api-ip :3001' ;// Replace with your API's IP and port

const AddPatient =({navigation })=>{
   const[name ,setName ]=useState('') ;
   const[age ,setAge ]=useState('') ;
   const[dob ,setDob ]=useState('') ;
   const[medicalHistory ,setMedicalHistory ]=useState('') ;

   const handleSubmit =async() =>{
     try{
       await axios.post(`${API_URL}/api/patients`,{
         name ,
         age :parseInt(age ),
         dob ,
         medicalHistory ,
       }) ;
       navigation.goBack() ;
     }catch(error){
       console.error('Error adding patient :' ,error) ;
     }
   };

   return(
     <ScrollView style ={styles.container }>
       <Text style ={styles.title }>Add New Patient</ Text >
       <TextInput 
         style ={styles.input }
         placeholder ="Name"
         value ={name }
         onChangeText ={setName }
       />
       <TextInput 
         style ={styles.input }
         placeholder ="Age"
         value ={age }
         onChangeText ={setAge }
         keyboardType ="numeric"
       />
       <TextInput 
         style ={styles.input }
         placeholder ="Date of Birth"
         value ={dob }
         onChangeText ={setDob }
       />
       <TextInput 
         style ={styles.input }
         placeholder ="Medical History"
         value ={medicalHistory }
         onChangeText ={setMedicalHistory }
         multiline 
       />
       <TouchableOpacity style ={styles.button }onPress ={handleSubmit }>
         <Text style ={styles.buttonText }>Add Patient</ Text >
       </TouchableOpacity >
     </ScrollView >
   );
};

const styles =StyleSheet.create({
   container :{
     flex :1 ,
     padding :20 ,
     backgroundColor :'#f5f5f5' ,
   },
   title :{
     fontSize :24 ,
     fontWeight :'bold' ,
     marginBottom :20 ,
   },
   input :{
     backgroundColor :'white' ,
     padding :10 ,
     marginBottom :10 ,
     borderRadius :5 ,
   },
   button :{
     backgroundColor :'blue' ,
     padding :15 ,
     borderRadius :5 ,
     alignItems :'center' ,
   },
   buttonText :{
     color :'white' ,
     fontSize :16 ,
     fontWeight :'bold' ,
   },
});

export default AddPatient ;