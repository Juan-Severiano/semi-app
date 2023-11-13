import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, FlatList, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'

export default props => {
  console.log(props.route.params)

  return (
    <>
      <TouchableOpacity style={{
        padding: 10,
        backgroundColor: '#0001',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10,
        position: 'absolute',
        zIndex: 5
      }} onPress={() => {
        props.navigation.goBack()
      }}>
        <Ionicons name='arrow-back' size={30} color='#fff' />
      </TouchableOpacity>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <View style={{ marginTop: 70 }}>
        <FlatList 
            data={props.route.params.list}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
              return(
                <TouchableOpacity style={styles.cardContainer} onPress={() => {
                  Linking.openURL(`${item.link}`)
                }}>
                  <Image style={styles.cardImg} source={props.route.params.spaece ? require('../../assets/1.png') : props.route.params.enem ? require('../../assets/2.png') : require('../../assets/4.png')} />
                  <Text style={{
                    fontSize: 30,
                    fontWeight: '700',
                  }}>
                    {item.name}
                  </Text>
                  <Ionicons name='arrow-forward' size={30} color='#fff' />
                </TouchableOpacity>
              )
            }}
        />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    height: Dimensions.get('window').width / 4 + 30,
    width: '100%',
    backgroundColor: '#ddd',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5
  },
  cardImg: {
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

})
