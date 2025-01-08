import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';

function DepartmentCard({ department }) {
  const [bedsAvailable, setBedsAvailable] = useState(department.bedsAvailable);

  // Function to update bed availability in the backend
  const updateBeds = async (departmentId, newBeds) => {
    try {
      const response = await axios.put(
        `http://<your-ip-address>:5000/api/hospital/update-bed/${departmentId}`,
        { bedsAvailable: newBeds }
      );
      console.log('Bed update response:', response.data);
    } catch (error) {
      console.error('Error updating bed availability on the backend', error);
      Alert.alert('Error', 'Could not update bed availability');
    }
  };

  // Increase bed availability
  const handleIncrease = async () => {
    try {
      const newBeds = bedsAvailable + 1;
      setBedsAvailable(newBeds);
      await updateBeds(department._id, newBeds);
    } catch (error) {
      console.error('Error increasing bed availability', error);
    }
  };

  // Decrease bed availability
  const handleDecrease = async () => {
    try {
      if (bedsAvailable > 0) {
        const newBeds = bedsAvailable - 1;
        setBedsAvailable(newBeds);
        await updateBeds(department._id, newBeds);
      } else {
        Alert.alert('No beds available to occupy!');
      }
    } catch (error) {
      console.error('Error decreasing bed availability', error);
    }
  };

  return (
    <View style={{ padding: 20, borderWidth: 1, marginBottom: 10 }}>
      <Text>{department.name}</Text>
      <Text>Available Beds: {bedsAvailable}</Text>

      {/* Buttons for updating bed availability */}
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="+" onPress={handleIncrease} />
        <Button title="-" onPress={handleDecrease} />
      </View>

      {/* Edit button (for further functionality, e.g., redirect or modal) */}
      <Button
        title="Edit Details"
        onPress={() => Alert.alert('Redirect to edit page for department details')}
      />
    </View>
  );
}

export default DepartmentCard;
