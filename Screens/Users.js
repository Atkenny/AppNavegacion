import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Users() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
