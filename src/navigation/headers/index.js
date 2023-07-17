import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Address Book</Text>
    </View>
  );
};

export {CustomHeader};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
