import React from 'react';
import {View,Text,Button} from 'react-native';

export default (props) => {
    return(
        <View>
            <Text>SignUp Screen</Text>
            <Button title="SignUp" onPress={() => props.navigation.navigate('Forget')} />
        </View>
    )
}