// PatientDetails.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Replace with your API's IP and port

const PatientDetails = ({ route }) => {
  const { patientId } = route.params;
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  const fetchPatientDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/patients/${patientId}`);
      setPatient(response.data);
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  if (!patient) return <Text>Loading...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{patient.name}</Text>
      <Text style={styles.info}>Age: {patient.age}</Text>
      <Text style={styles.info}>Gender: {patient.gender}</Text>
      <Text style={styles.info}>Blood Type: {patient.bloodType}</Text>
      <Text style={styles.info}>Condition: {patient.condition}</Text>
      
      <Text style={styles.sectionTitle}>Clinical Data</Text>
      {patient.clinicalData.map((data, index) => (
        <View key={index} style={styles.clinicalDataItem}>
          <Text>Date: {data.date}</Text>
          <Text>Type: {data.type}</Text>
          <Text>Value: {data.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  clinicalDataItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default PatientDetails;