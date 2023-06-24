import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Header(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Movie App</Text>
            </View>
            <View>
                <Image source={require('../../../assets/Images/user.png')}/>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        height:100,
        justifyContent:'space-between',
        backgroundColor:"#0f171e",
        color:"#ffffff"
        

    },
    textStyle:{
        color:"#ffffff"
    }
})

export default Header;