import React from 'react';
import {View, Text, Image, StyleSheet, TouchableWithoutFeedback, Button} from 'react-native';

function MovieCard({onPress,title,desc,image}) {
   // console.log("id",id);
    const imgsrc={uri:image};
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image  style={{width:'100%', height:'80%'}} source={imgsrc}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
           
           
        </View>
        </TouchableWithoutFeedback>
    );

   
}

const styles=StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"#1a242f",
        marginBottom:20,
        marginLeft:20,
        padding:20,
        width:300,
        height:400,
        flex:1,
        cursor:"pointer"

    },
    title:{
        fontWeight:'bold',
        fontSize:16,
        color:'#ffffff',
        marginTop:5
    },
    desc:{
        fontWeight:'bold',
        color:"#79b8f3",
        marginBottom:5,
        
    }

})

export default MovieCard;