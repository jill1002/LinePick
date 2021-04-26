import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Image, Button } from 'react-native';
import { Header, Left, Right, Body } from "native-base";
import styles from '../styles.js'
import { IconButton } from 'react-native-paper';
import Tags from "react-native-tags";
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';

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
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
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
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
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
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
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
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
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
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
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
                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
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
                <View style={{ flexDirection: 'column', padding: 15 }}>
                    <View>
                        <Text style={styles.baseText}>
                            <Icon name='ios-camera' color='#6b7f94' size={25} />
                            上傳賣場封面</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 8, justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                            <IconButton
                                icon="plus-circle"
                                color='#8C7599'
                                size={28}
                                onPress={openImagePickerAsync} title='選擇檔案'
                            />
                        </View>
                        <View style={[styles.uploadarea, {
                            width: 150, height: 150
                            , paddingHorizontal: 45, paddingVertical: 45
                        }]}>
                            <Image
                                style={{ width: "200%", height: "200%", bottom: 25, alignSelf: 'center' }}
                                source={require('../assets/linepick.jpg')}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <Text style={styles.baseText}>
                        <Icon name='ios-apps' color='#6b7f94' size={25} />
                            賣場商品分類</Text>
                    <TouchableOpacity style={{ paddingLeft: 30, flexDirection: 'row' }} onPress={() => navigation.navigate('註冊')}>
                        <Text style={{ color: "#8C7599", fontSize: 18, textDecorationLine: 'underline' }}>編輯分類
                            <Icon name='ios-pencil' color='#8C7599' size={25} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.button, { width: 150, marginBottom: 25 }]}>
                    <Text style={styles.buttonText}>完成</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}
