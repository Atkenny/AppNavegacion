import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function DetailHome() {
  const navigation = useNavigation(); // Uso de useNavigation para obtener la instancia de navegación

  return (
    <View style={{ backgroundColor: 'pink', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DetailHome</Text>
      <Button 
        title='Mas detalles' 
        onPress={() => navigation.replace("AnotherDetailHome")} // Cambia 'navigate' por 'replace'
      />
    </View>
  );
}
