
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home/Home';
import MovieDetails from './src/components/MovieDetails/MovieDetails';
import MovieListing from './src/components/MovieListing/MovieListing';
import { Provider } from 'react-redux';
import {store} from './src/features/store/store';
import FeedNavigator from './src/navigation/feedNavigator';

const Stack=createNativeStackNavigator();

export default function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Showcase',
          headerStyle: {
            backgroundColor: '#1a242f',
            borderBottomColor:'none',
            fontSize:35
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Movies" component={MovieListing}  options={{
          title: 'Movies',
          headerStyle: {
            backgroundColor: '#1a242f',
            borderBottomColor:'none',
            fontSize:35
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="MovieDetails" component={MovieDetails}  options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#1a242f',
            borderBottomColor:'none',
            fontSize:35
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


