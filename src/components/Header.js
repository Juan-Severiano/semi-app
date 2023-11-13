import { Component } from 'react';
import { Image, View } from 'react-native';
import IconPng from '../../assets/icon-logo.png'

export default class Header extends Component {
  render() {
    return (
      <View style={{ height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', margin: 0, borderBottomWidth: 1, borderColor: '#cecece' }}>
        <Image source={IconPng}
          style={{ resizeMode: 'contain', maxWidth: 100 }}
        />
      </View>
    )
  }
}