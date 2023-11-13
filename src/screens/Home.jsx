import { Dimensions, Image, ImageBackground, Linking, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Card from '../components/Card'
import lists from '../assets/lists'

export default props => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <Header />
      <ImageBackground
        source={require('../../assets/icon.png')}
        style={{ width: '100%', resizeMode: 'contain', height: 300, marginTop: 0 }}
      />
      <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
        <View style={{ width: '90%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('ListForm', {
              list: lists.spaece,
              spaece: true
            })
          }}>
            <Card 
              cover={require('../../assets/1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('ListForm', {
              list: lists.enem,
              enem: true,
            })
          }}>
            <Card cover={require('../../assets/2.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('ListVideos', {
              list: lists.podmat
            })
          }}>
            <Card cover={require('../../assets/3.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Linking.openURL(`${lists.questionBank[0].link}`)
          }}>
            <Card cover={require('../../assets/4.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            Linking.openURL('https://www.todamateria.com.br/formulas-de-matematica/')
          }}>
            <Card cover={require('../../assets/5.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('ListVideos', {
              list: lists.videoAulas,
              vA: true
            })
          }}>
            <Card cover={require('../../assets/6.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
