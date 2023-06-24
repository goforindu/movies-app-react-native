import React from 'react';
import {View, Text, FlatList, StyleSheet,  TouchableWithoutFeedback, Button} from 'react-native';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';

function MovieListing({navigation,onPress}) {
   
    const movies=useSelector(getAllMovies);
    const series=useSelector(getAllSeries);
    return (
        <View>
        <Text style={styles.heading} >Movies</Text>
   <FlatList data={movies.Search} horizontal showsHorizontalScrollIndicator={false} keyExtractor={movie=>movie.imdbID} 
       renderItem={({item})=>{
            return <MovieCard  title={item.Title} desc={item.Year} image={item.Poster} onPress={()=>onPress(item.imdbID)}/>}}/>
    <Text style={styles.heading} >Series</Text>
   <FlatList data={series.Search} horizontal showsHorizontalScrollIndicator={false} keyExtractor={movie=>movie.imdbID} 
       renderItem={({item})=>{
            return  <MovieCard title={item.Title} desc={item.Year} image={item.Poster} onPress={()=>onPress(item.imdbID)}/>}}/>
   </View>

    );
}
const styles=StyleSheet.create({
    heading:{
        fontWeight:"bold",
        fontSize:30,
        color:"tomato",
        padding:10,
        margin:10
    }
})
export default MovieListing;