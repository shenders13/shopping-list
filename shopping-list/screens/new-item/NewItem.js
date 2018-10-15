import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    newItemName: ''
  }



  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(newItemName) => this.setState({newItemName})}
          value={this.state.newItemName}
        />
      </View>
    );
  }
}

