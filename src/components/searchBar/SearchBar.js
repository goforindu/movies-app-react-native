import React from 'react';
import { View, TextInput, StyleSheet,Button } from 'react-native';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
import {Feather} from '@expo/vector-icons';

function SearchBar({term,setSearchTerm}) {
    const dispatch=useDispatch();
    const changeHandler=(text)=>{
        console.log("change handler");
        setSearchTerm(text);
    }
    const submitHandler=()=>{
        console.log("term entered is", term);
        dispatch(fetchAsyncMovies({term:term, type:"movie"}));

        dispatch(fetchAsyncSeries({term:term, type:"series"}));
    }
    return (
        <View>
        <TextInput placeholder='Enter the search term' style={styles.searchInput} value={term} onChangeText={text=>changeHandler(text)}/>
        <Button title="Search" onPress={submitHandler} style={{backgroundColor:"yellow" ,color:"#ffffff"}}/>
        </View>
        //     <View>
    //     <View style={styles.searchContainer}>
    //         <TextInput placeholder='Enter the search term' style={styles.searchInput} value={term} onChangeText={text=>changeHandler(text)}/>
    //         <Button title="Search" onPress={submitHandler} style={{backgroundColor:"yellow" ,color:"#ffffff"}}/>
    //     </View>
    //     <View> <Button title="Search" onPress={submitHandler} style={{backgroundColor:"yellow" ,color:"#ffffff"}}/></View>
    //    </View>
        );
}

const styles=StyleSheet.create({
    searchInput:{
      
        backgroundColor:"grey",
        padding:15,
        width:'90%',
        height:50,
        color:"#ffffff",
        fontSize:18,
        borderWidth:5,
        borderColor:'#F0EEEE',
        borderRadius:25,
        margin:20,
       
    },
    searchContainer:{
        backgroundColor:"grey",
       // padding:25,
        width:'90%',
        height:38,
        color:"#ffffff",
        fontSize:18,
        borderWidth:5,
        borderColor:'#F0EEEE',
        borderRadius:25,
        alignSelf:"center",
        margin:10,
        flex:1,
        flexDirection:"row",
        
    }
})
export default SearchBar;