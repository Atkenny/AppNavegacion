import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Importación de useNavigation

export default function Settings() {
  const navigation = useNavigation(); // Uso de useNavigation para obtener la instancia de navegación

  return (
    <View style={{ backgroundColor: 'pink', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <Button 
        title='Ir a Detalles' 
        onPress={() => navigation.navigate("DetailHome")} // Navegar a DetailHome
      />
    </View>
  );
}
