import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import styles from '../styles.js'
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function SignUp({ navigation }) {
    const [account, setAccount] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [market_name, setMarketName] = useState('');
    
    function add(){
        const SellerInfo={
            sellerAccount: account,
            sellerPassword: user_password,
            sellerMail: email,
            sellerPhone: cellphone,
            marketName: market_name
    
        }
    
        axios.post("http://a8324ec7c82c.ngrok.io/SellerSignUp/", SellerInfo)
        .then(res => {
            console.log(res);
            console.log(res.data);
            alert('註冊成功!')
            navigation.goBack();
          }); 
      }
    return (
        <View style={styles.container1}>
            <Image
                style={{ width: "50%", height: "25%", alignSelf: 'center', top: 80, zIndex: 1 }}
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
                            onChangeText={text=>setAccount(text)}
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
                            onChangeText={text=>setUserPassword(text)}
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
                            onChangeText={text=>setEmail(text)}
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
                            onChangeText={text=>setCellphone(text)}
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
                            onChangeText={text=>setMarketName(text)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: 25 }}>
                        <TouchableOpacity style={[styles.button, { width: "40%" }] } onPress={add}>
                            <Text style={{color: '#ffff', fontWeight:'bold', fontSize: 15}}>註冊</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity>
                            <Button title="已有帳號? 點我登入" color="#6b7f94" onPress={() => navigation.navigate('登入')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}