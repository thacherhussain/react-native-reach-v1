import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('Frankie said RELAX!')
  }

  render() {
    return (
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
});
