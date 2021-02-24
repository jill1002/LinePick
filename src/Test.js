import React from 'react';
import { View, Text} from 'react-native';
import FormInput from './FormInput';
import { IconButton, Colors } from 'react-native-paper';

export default function Test() {
    return(
    <View >
        <Text >賣場類型</Text>  
        <IconButton
    icon="camera"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />

        <FormInput
                        name='email'
                        value='email'
                        placeholder='Enter email'
                        autoCapitalize='none'
                        iconName='ios-mail'
                        iconColor='#2C384A'
                    />
    </View>
    )
}