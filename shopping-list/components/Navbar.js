import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const Navbar = ({
  clearAll,
  isNewItemPage,
  toggleNewPage,
  areItemsPresent
}) => {

  if (isNewItemPage) {
    return (
      <View style={[styles.navbar, styles.pushLeft]}>
        <TouchableOpacity onPress={()=>toggleNewPage(false)} style={styles.leftTextContainer}>
            <Text style={styles.leftText}>Back</Text>
        </TouchableOpacity>
      </View>  
    )
  }

  return (
    <View style={[styles.navbar, styles.pushRight]}>
        { areItemsPresent &&
          <TouchableOpacity onPress={clearAll} style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Clear all</Text>
          </TouchableOpacity>
        }
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    marginTop: 20
  },
  pushLeft: {
    justifyContent: 'flex-start'
  },
  pushRight: {
    justifyContent: 'flex-end'
  },
  leftText: {
    fontSize: 18,
    fontFamily: 'GTWalsheim',
    color: '#8CC1F5'
  },
  rightText: {
    fontSize: 18,
    fontFamily: 'GTWalsheim',
    color: '#8CC1F5'
  },
  leftTextContainer: {
    marginLeft: 12
  },
  rightTextContainer: {
    marginRight: 12
  }
});

export default Navbar