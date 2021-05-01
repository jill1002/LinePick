import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import styles from '../styles.js'
import Icon from 'react-native-vector-icons/Ionicons';

export default function SignIn({ navigation }) {
    const [account, setAccount] = useState("");
    const [user_password, setUserPassword] = useState("");

    return (
        <View style={styles.container1}>
            <Image
                style={{ width: "50%", height: "25%", alignSelf: 'center', top: 160, zIndex: 1 }}
                source={require('../assets/linepick.jpg')}
            />
            <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center', padding: 8, }}>
                <View style={styles.signupborder}>
                    <View style={styles.textInputStyleSign}>
                        <Icon name='ios-person-circle' color='#8C7599' size={30} style={{ paddingRight: 5, paddingLeft: 5, }} />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="使用者帳號"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#8C7599"
                            value={account}
                            onChangeText={setAccount}
                        />
                    </View>
                    <View style={styles.textInputStyleSign}>
                        <Icon name='ios-lock-closed' color='#8C7599' size={30} style={{ paddingRight: 5, paddingLeft: 5, }} />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="使用者密碼"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#8C7599"
                            value={user_password}
                            onChangeText={setUserPassword}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: 25 }}>
                        <TouchableOpacity style={[styles.button, { width: "40%" }]}>
                            <Text style={{color: '#ffff', fontWeight:'bold', fontSize: 15}}>登入</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <TouchableOpacity>
                            <Button title="還沒有帳戶? 點我註冊" color="#6b7f94" onPress={() => navigation.navigate('註冊')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}