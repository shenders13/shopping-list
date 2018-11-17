import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';


export default class App extends React.Component {

  state = {
    newItemName: ''
  }

  onCreate = () => {
    if (this.state.newItemName) {
      this.props.createItem(this.state.newItemName)  
    }
    this.props.toggleNewPage(false)
  }

  onChangeText = (newItemName) => {
    this.setState({newItemName})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formHeading}>Add new item to list</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          value={this.state.newItemName}
          autoFocus={true}
          placeholder="Enter new item"
        />
        <TouchableOpacity onPress={this.onCreate} style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const windowDimensions = Dimensions.get("window")
const windowHeight = windowDimensions.height
const windowWidth = windowDimensions.width

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 32,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#F6F6F6',
    height: windowHeight - 68,
  },
  formHeading: {
    fontSize: 18,
    fontFamily: 'GTWalsheim',
    color: '#ADADAD'
  },
  input: {
    width: '100%',
    height: 44,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderColor: '#8CC1F5',
    borderWidth: 1,
    borderRadius: 54,
    paddingLeft: 24,
    fontSize: 18,
    fontFamily: 'GTWalsheim',
    color: '#ADADAD',
    marginTop: 24
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16
  },
  button: {
    backgroundColor: '#8CC1F5',
    borderRadius: 100,
    height: 47,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'GTWalsheim',
    color: 'white'
  }
});

