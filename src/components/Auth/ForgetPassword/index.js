import React from 'react';
import {View,Text,Button} from 'react-native';

export default (props) => {
    return(
        <View>
            <Text>Forget Password</Text>
            <Button title="App Screen" onPress={() => props.navigation.navigate('HomeScreen')} />
        </View>
    )
}