import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Application extends Component{
    render(){
        return(
            <View style = {styles.View}> 
                <Text style = {styles.bodyText}> Randil Gurusinghe </Text>
                <Text style = {styles.bodyText1}> BSc(Hons) Sri Lanka Institute of Information Technology </Text>
             </View>

        );
    }
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

    },
    bodyText: {
        fontSize: 20,
        color: 'red',
    },
    bodyText1: {
        fontSize: 14,
        color: 'black',
    },
})
export default Application;