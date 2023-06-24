import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import {ApiKey} from '../../common/apis/MovieApiKey';

const initialState={
    movies:[],
    series:[],
    showOrMovie:{}
};

export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async({term,type})=>{
    const movieterm="Harry";
    const response= await movieApi.get(`?apikey=${ApiKey}&s=${term}&type=${type}`);
   return response.data;
});
export const fetchAsyncSeries=createAsyncThunk('movies/fetchAsyncSeries',async({term,type})=>{
    const movieterm="Harry";
    const response= await movieApi.get(`?apikey=${ApiKey}&s=${term}&type=${type}`);
   return response.data;
});
export const fetchAsyncShowOrMovie=createAsyncThunk('movies/fetchAsyncShowOrMovie',async(id)=>{
    console.log("id is",id);
    const response= await movieApi.get(`?apikey=${ApiKey}&i=${id}&Plot=full`);
    console.log(response);
   return response.data;
});


const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("movies fetched");
            return {...state,movies:payload};
        },
        [fetchAsyncSeries.fulfilled]:(state,{payload})=>{
            console.log("series fetched");
            return {...state,series:payload};
        },
        [fetchAsyncShowOrMovie.fulfilled]:(state,{payload})=>{
            console.log("details fetched");
            return {...state,showOrMovie:payload};
        },
        [fetchAsyncMovies.rejected]:(err)=>{
            alert("Something went wrong");
            console.log("rejected");
        }

    }
});

export const {addMovies}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllSeries=(state)=>state.movies.series;
export const getSelectedMovieOrShow=(state)=>state.movies.showOrMovie;

export default movieSlice.reducer;