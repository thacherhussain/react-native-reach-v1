import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Examples } from '@shoutem/ui';

export default class App extends Component {
  _onPressButton() {
    Alert.alert('Frankie said RELAX!')
  }

  render() {
    return (
      <Examples />
      <View style={styles.container}>
        <Button
          raised
          onPress={this._onPressButton}
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'steelblue', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`relax.`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B616A',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
