import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncShowOrMovie, getSelectedMovieOrShow } from '../../features/movies/movieSlice';
import {View, Text,StyleSheet,Image,SafeAreaView,ScrollView } from 'react-native';
function MovieDetails({route}) {
    const {id}=route.params;
     const dispatch=useDispatch();
     const item=useSelector(getSelectedMovieOrShow);
     const imgsrc={uri:item.Poster};
     useEffect(()=>{
        dispatch(fetchAsyncShowOrMovie(id));
     },[dispatch,id])
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}>
        <Text style={styles.title}>{item.Title}</Text>
         <View style={{width:'95%',height:500,marginHorizontal:'2.5%'}}>
        <Image  style={{width:'100%',height:'98%'}} source={imgsrc} />
        </View>
        <View style={{  backgroundColor:"#0f171e",marginBottom:15}}>
        <Text style={styles.tags}>Duration: {item.Runtime}</Text>
        <Text style={styles.tags}> Rated: {item.Rated}</Text>
        <Text style={styles.tags}> Language:{item.Language}</Text>
        <Text style={styles.tags}>Year: {item.Year}</Text>
         <Text style={styles.tags}>Genre: {item.Genre}</Text>
         </View>
        <View>
        <Text style={styles.subtitle}>{item.Plot}</Text>
        <Text style={styles.subtitle}>Actors: {item.Actors}</Text>
         <Text style={styles.subtitle}> Awards: {item.Awards}</Text>
         <Text style={styles.subtitle}> Director:{item.Director}</Text>
         <Text style={styles.subtitle}>Writer: {item.Writer}</Text>
        <Text style={styles.subtitle}>Country: {item.Country}</Text>
        </View>
        </View>
        </ScrollView>
         </SafeAreaView>
       );
    }

    const styles=StyleSheet.create({
        container:{
            backgroundColor:'#0f171e',
            paddingBottom:20,
            paddingHorizontal:10
            
        },
        title:{
            fontWeight:'bold',
            fontSize:24,
            color:'#ffffff',
           marginVertical:20,
            textAlign:"left"
        },
        subtitle:{
            fontSize:18,
            color:'#F0EEEE',
            marginTop:10,
            textAlign:"left"
        },
        tags:{
            fontSize:18,
            backgroundColor:'#F1EEEE',
            color:"#000000",
            marginBottom:10,
            padding:5,
            borderRadius:5,
            }
    }
       
    )
export default MovieDetails;