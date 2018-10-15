import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';


const Navbar = ({
  leftIconText='',
  onLeftIconClick=()=>{},
  rightIconText='',
  onRightIconClick=()=>{},
}) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity>
        <Text style={styles.leftText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.rightText}>Clear all</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    marginTop: 20
  },
  leftText: {
    fontSize: 20,
    color: '#8CC1F5',
    marginLeft: 12
  },
  rightText: {
    fontSize: 20,
    color: '#8CC1F5',
    marginRight: 12
  }
});

export default Navbar