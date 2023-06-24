import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieListing from '../components/MovieListing/MovieListing';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const Stack=createNativeStackNavigator();

const FeedNavigator=()=>{
    <Stack.Navigator>
        <Stack.Screen name="movieListing" component={MovieListing}></Stack.Screen>
        <Stack.Screen name="movieDetail" component={MovieDetails}></Stack.Screen>
    </Stack.Navigator>
}

export default FeedNavigator;