import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ListForm from '../screens/ListForm'
import ListVideos from '../screens/ListVideos'

const Stack = createNativeStackNavigator()

export default props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {props => (
              <Home {...props} />
            )}
          </Stack.Screen>
          <Stack.Screen name='ListForm' component={ListForm} />
          <Stack.Screen name='ListVideos' component={ListVideos} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}