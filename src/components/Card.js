import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'

export default props => {
  return (
    <Image style={styles.card} source={props.cover} />
  )
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get('window').width / 4, 
    width: Dimensions.get('window').width / 4,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
