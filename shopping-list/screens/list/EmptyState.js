import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const EmptyState = () => {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>No items dude. You should</Text>
      <Text style={styles.emptyStateText}>make one.</Text>
    </View>
  )
}

export default EmptyState


const styles = StyleSheet.create({
  emptyState: {
    width: 290,
    height: 116,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#D9D9D9',
    borderStyle: 'dashed',
    borderWidth: 1,
    marginTop: 32
  },
  emptyStateText: {
    fontSize: 16,
    fontFamily: 'GTWalsheim',
    color: '#ADADAD',
    lineHeight: 24
  }
})