import React, { Component, Text, View } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from '@shoutem/ui';


export default class Section extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatarImage} source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }} />
        <Text style={styles.title}>John Doe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  title: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
  },
});
