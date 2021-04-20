import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../styles.js'
import Icon from 'react-native-vector-icons/Ionicons';

export default function SignUp() {
    const [user_name, setUserName] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [market_name, setMarketName] = useState('');

    return (
        <View style={styles.container}>
            <Image
                style={{ width: "50%", height: "25%", alignSelf: 'center', top: 30, zIndex: 1 }}
                source={require('../assets/linepick.jpg')}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8, }}>
                <View style={styles.signupborder}>
                    <View style={styles.textInputStyle}>
                        <Icon name='ios-person-circle' color='#8C7599' size={30} style={{ paddingRight: 5, paddingLeft: 5, }} />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="使用者名稱"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="#8C7599"
                            value={user_name}
                            onChangeText={setUserName}
                        />
                    </View>
                    <View style={styles.textInputStyle}>
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
                    <View style={styles.textInputStyle}>
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
                    <View style={{ marginBottom: 10 }}>
                        <TextInput style={styles.signuptextarea}
                            value={user_password}
                            onChangeText={setUserPassword}
                            placeholder="密碼"
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <TextInput style={styles.signuptextarea}
                            value={market_name}
                            onChangeText={setMarketName}
                            placeholder="賣場名稱"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: "5%", marginTop: "10%" }}>
                        <TouchableOpacity style={[styles.multibuttons, { width: "40%" }]}>
                            <Text style={styles.buttonText}>註冊</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.multibuttons, { width: "40%" }]}>
                            <Text style={styles.buttonText}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}