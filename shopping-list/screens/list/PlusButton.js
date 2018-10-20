import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const PlusButton = ({toggleNewPage}) => {
  return (
    <TouchableOpacity style={styles.imageContainer} onPress={()=>toggleNewPage(true)}>
      <Image source={require('../../assets/plus-icon.png')} style={styles.image}/>
    </TouchableOpacity>
  )
}

export default PlusButton


const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    resizeMode: 'contain'
  },
  imageContainer: {
    width: 64,
    height: 64,
  }
})
