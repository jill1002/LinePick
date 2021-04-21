import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import styles from '../styles.js'
import Icon from 'react-native-vector-icons/Ionicons';

export default function SignUp({ navigation }) {
    const [account, setAccount] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [market_name, setMarketName] = useState('');

    return (
        <View style={styles.container}>
            <Image
                style={{ width: "50%", height: "25%", alignSelf: 'center', top: 70, zIndex: 1 }}
                source={require('../assets/linepick.jpg')}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8, }}>
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
                    <View style={styles.textInputStyleSign}>
                        <Icon name='ios-mail' color='#8C7599' size={30} style={{ paddingRight: 5, paddingLeft: 5, }} />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="電子郵件"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#8C7599"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.textInputStyleSign}>
                        <Icon name='ios-call' color='#8C7599' size={30} style={{ paddingRight: 5, paddingLeft: 5, }} />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="手機號碼"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#8C7599"
                            value={cellphone}
                            onChangeText={setCellphone}
                        />
                    </View>
                    <View style={styles.textInputStyleSign}>
                        <Icon name='ios-basket' color='#8C7599' size={30} style={{ paddingRight: 5, paddingLeft: 5, }} />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="賣場名稱"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#8C7599"
                            value={market_name}
                            onChangeText={setMarketName}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: 25 }}>
                        <TouchableOpacity>
                            <Button title="註冊" color="#6b7f94" onPress={() => navigation.navigate('註冊')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}