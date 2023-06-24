import React, { useEffect, useState } from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView,ScrollView } from 'react-native';

import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
import SearchBar from '../searchBar/SearchBar';

function Home({navigation}) {
    const[term, setTerm]=useState();
    
    const dispatch=useDispatch();
    const setSearchTerm=(term)=>{
        setTerm(term);
       
    }
    
    useEffect(()=>{
            dispatch(fetchAsyncMovies({term:"Harry", type:"movie"}));

            dispatch(fetchAsyncSeries({term:"friends", type:"series"}));
      
    },[dispatch])
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <SearchBar term={term} setSearchTerm={setSearchTerm}/>
           <MovieListing   onPress={(imdbID)=>{navigation.navigate("MovieDetails",{id:imdbID})}}/>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
}

const styles=StyleSheet.create({
container:{
   
    backgroundColor:"#0f171e",
    paddingBottom:20
}
})

export default Home;