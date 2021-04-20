import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import styles from '../styles.js'

export default function SignIn({ navigation }) {
    const [user_password, setUserPassword] = useState("");
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <Image
                style={{ width: "50%", height: "25%", alignSelf: 'center', top: 150, zIndex: 1 }}
                source={require('../assets/linepick.jpg')}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8, }}>
                <View style={styles.signupborder}>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <TextInput style={styles.signuptextarea}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="電子郵件"
                        />
                    </View>
                    <View>
                        <TextInput style={styles.signuptextarea}
                            value={user_password}
                            onChangeText={setUserPassword}
                            placeholder="密碼"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={[styles.button, { width: "40%" }]}>
                            <Text style={styles.buttonText}>登入</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Button title="還沒有帳戶? 點我註冊" color="#6b7f94" onPress={() => navigation.navigate('註冊')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}