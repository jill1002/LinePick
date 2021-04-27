import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import { Header, Left, Right, Body } from "native-base";
import styles from '../styles.js'
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import ReactChipsInput from 'react-native-chips';

export default function SellerSet({ navigation }) {
    const [user_password, setUserPassword] = useState("");
    const [market_name, setMarketName] = useState('');
    const [market_desc, setMarketDesc] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
    }

    return (
        <ScrollView style={{ backgroundColor: '#c8d3c5' }}>
            <Header
                style={{
                    backgroundColor: "#f9e7d2",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Left style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                    >
                        <Icon
                            name="ios-menu"
                            color="#77773c"
                            size={30}
                            style={{ paddingLeft: 15, width: 50 }}
                        />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{ fontSize: 22, color: "#77773c", fontWeight: 'bold' }}>賣場設定</Text>
                </Body>
                <Right>
                    <TouchableOpacity onPress={() => navigation.navigate("賣場設定")}>
                        <Icon
                            name="ios-settings-sharp"
                            color="#77773c"
                            size={30}
                            style={{ paddingLeft: 15, width: 50 }}
                        />
                    </TouchableOpacity>
                </Right>
            </Header>
            <View style={styles.marketBorder}>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.baseText}>
                        <Icon name='ios-person-circle' color='#6b7f94' size={25} />
                            使用者帳號:
                    </Text>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <View style={styles.userAcount}>
                            <Text style={{ color: "#8C7599", fontSize: 18 }}>LINEPICK</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.baseText}>
                        <Icon name='ios-lock-closed' color='#6b7f94' size={25} />
                            使用者密碼:</Text>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <View style={styles.textInputStyle}>
                            <TextInput
                                placeholder="ABC123"  //之後後端改這裡為變數
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#8C7599"
                                value={user_password}
                                onChangeText={setUserPassword}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.baseText}>
                        <Icon name='ios-basket' color='#6b7f94' size={25} />
                            賣場名稱:</Text>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <View style={styles.textInputStyle}>
                            <TextInput
                                placeholder="日韓代購"
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#8C7599"
                                value={market_name}
                                onChangeText={setMarketName}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.baseText}>
                        <Icon name='ios-call' color='#6b7f94' size={25} />
                            手機號碼:</Text>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <View style={styles.textInputStyle}>
                            <TextInput
                                placeholder="0912345678"
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#8C7599"
                                value={cellphone}
                                onChangeText={setCellphone}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.baseText}>
                        <Icon name='ios-mail' color='#6b7f94' size={25} />
                            電子郵件:</Text>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <View style={styles.textInputStyle}>
                            <TextInput
                                placeholder=" buy@gmail.com"
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#8C7599"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.baseText}>
                        <Icon name='ios-information-circle' color='#6b7f94' size={25} />
                            賣場簡介:</Text>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <View style={styles.textInputStyleLarge}>
                            <TextInput
                                placeholder="專業日韓美妝、零食、雜貨代購，定期進貨~"
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#8C7599"
                                value={market_desc}
                                onChangeText={setMarketDesc}
                                multiline='true'
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={styles.baseText}>
                        <Icon name='ios-apps' color='#6b7f94' size={25} />
                            賣場商品分類</Text>
                </View>
                <View style={{ paddingLeft: 18 }}>
                            < ReactChipsInput
                                label="請輸入賣場商品分類" initialChips={["零食", "美妝保養","生活雜貨"]}
                                onChangeChips={(chips) => console.log(chips)}
                                alertRequired={true}
                                chipStyle={{ borderColor: '#f9e7d2', backgroundColor: '#f9e7d2' }}
                                inputStyle={{ fontSize: 10 }}
                                labelStyle={{ color: '#8C7599', fontSize: 15 }}
                                labelOnBlur={{ color: '#666' }} />
                        </View>
                <TouchableOpacity style={[styles.button, { width: 150, marginBottom: 20 }]}>
                    <Text style={styles.buttonText}>完成</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}
