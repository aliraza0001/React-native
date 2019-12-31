import React from 'react';
import {View,Text,Button} from 'react-native';

export default (props) => {
    console.log(props.navigation)
    return(
        <View>
            <Text>SignIn Screen</Text>
            <Button title="SignUp" onPress={() => props.navigation.navigate('SignUp')} />
        </View>
    )
}