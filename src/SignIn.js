import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions,Image } from 'react-native';
import styles from '../styles.js'
import FormInput from './FormInput.js'
//import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';
import { Icon } from 'react-native-elements';





export default function SignUp() {
    const [user_name, setUserName] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [market_name, setMarketName] = useState('');

    return (
        <View style={[styles.container]}>
            
                    <Image
                        style={{ width: "35%", height: "15%",alignSelf:'center',top: 160,zIndex:1}}
                        source={{ uri: 'https://free.com.tw/blog/wp-content/uploads/2014/10/LINE-for-iPad-%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%EF%BC%81%E9%9B%BB%E8%85%A6%E7%89%88%E3%80%81%E6%89%8B%E6%A9%9F%E3%80%81%E5%B9%B3%E6%9D%BF%E4%B8%89%E6%96%B9%E4%B8%80%E8%B5%B7-LINE%EF%BC%81%E7%9B%B8%E7%89%87-2014-10-16-%E4%B8%8A%E5%8D%8810-06-56.png' }}
                        />                

                <View style={{flex:1,alignItems: 'center',justifyContent:'center',padding: 8,}}>
                    
                    
                    <View style={styles.signupborder}>


                        <View>
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

                        <View style={{ flexDirection: 'row',alignContent:'center',justifyContent:'center'}}>
                            <TouchableOpacity style={[styles.button, { width: "40%" }]}>
                                <Text style={styles.buttonText}>登入</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row',alignContent:'center',justifyContent:'center'}}>
                            <TouchableOpacity style={{marginRight:75}}>
                                <Text style={{color:'#6b7f94'}}>還沒有帳戶?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{color:'#6b7f94'}}>忘記密碼</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
        
        </View>
    );
}