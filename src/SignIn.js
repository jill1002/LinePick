import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import styles from '../styles.js'
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function SignIn({ navigation }) {
    const [signUser, setSignUser] = useState("");
    const [account, setAccount] = useState("");
    const [user_password, setUserPassword] = useState("");

    // useEffect(() => {
    //     async function fetchData () {
    //     console.log("in fetchData");
        
    //     const orderListCard = await axios.get('http://81728945fd9d.ngrok.io/SellerLogIn/'+account+user_password);
    //       //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
    //       setSignUser(orderListCard.data);
             
    //     }
    //     fetchData();
    //   },[]);
//console.log(signUser);
function login(){
    console.log("account:"+account);
    console.log("user_password:"+user_password);
    const result = axios.get('http://81728945fd9d.ngrok.io/SellerLogIn/'+account+'/'+user_password)
    .then(res => {
        console.log(res);
        console.log(res.data);
        var info = res.data;
        if(info!=undefined){
            console.log("in true");
            navigation.navigate("賴皮客服")
        }else{
            console.log("in false");
            alert("登入失敗")
        }
      }); 
    //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
    setSignUser(result.data);
    
    
}
   
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
                    <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginTop: 25 }}>
                        <TouchableOpacity style={[styles.button, { width: "40%" }]} onPress={login}>
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