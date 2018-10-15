import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const PlusButton = () => {
  return (
    <TouchableOpacity>
      <Image source={require('../../assets/plus-icon.png')} style={styles.image}/>
    </TouchableOpacity>
  )
}

export default PlusButton


const styles = StyleSheet.create({
  image: {
    width: 88,
    height: 88,
    resizeMode: 'contain'
  }
})
