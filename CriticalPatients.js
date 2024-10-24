// CriticalPatients.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = 'http://your-api-ip:3001'; // Replace with your API's IP and port

const CriticalPatients = () => {
  const [criticalPatients, setCriticalPatients] = useState([]);

  useEffect(() => {
    fetchCriticalPatients();
  }, []);

  const fetchCriticalPatients = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/patients/critical`);
      setCriticalPatients(response.data);
    } catch (error) {
      console.error('Error fetching critical patients:', error);
    }
  };

  const renderPatient = ({ item }) => (
    <View style={styles.patientItem}>
      <Text style={styles.patientName}>{item.name}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Condition: {item.condition}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Critical Patients</Text>
      <FlatList
        data={criticalPatients}
        renderItem={renderPatient}
        keyExtractor={item => item.id.toString()}
      />
    </View>
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
});

export default CriticalPatients;