import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {

    return (

        <View style={{flex: 1, flexDirection: 'collumn', justifyContent: 'center', alignItems: 'stretch'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
        </View>
    ) 
};

const styles = StyleSheet.create({

    viewStyle: {
        borderWidth: 1,
        borderColor: red,
        margin: 20
    }
});

export default BoxScreen;