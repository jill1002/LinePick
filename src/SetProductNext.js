import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image, Button, Dimensions } from 'react-native';
import styles from '../styles.js'
import { IconButton, Colors, Appbar, Title } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Divider } from 'react-native-elements';

export default function SetProductNext({ route, navigation }) {
    // const productName = route.params.productName;
    // const productNameEnd = route.params.productNameEnd;
    // const productDesc = route.params.productDesc;
console.log("first");
console.log(route.params.productStyles);
    const [productStyle, setProductStyle] = useState([...route.params.productStyles]); 
    // useEffect(() => {
    //     async function fetchData() {
    //         console.log("fetch1"+productName);
    //         const result = await axios.get('http://42c21ae11ac0.ngrok.io/ProductsInfo/' + productName);
    //         setProductStyle(result.data);
    //     }
    //     fetchData();
    // }, []);

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
        <View style={[styles.container]}>
            <ScrollView style={{ backgroundColor: '#f4f3eb' }}>
                <Appbar.Header
                    style={{ backgroundColor: '#f9e7d2' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Text style={styles.baseText}>設定圖片、價格與庫存</Text>
                </Appbar.Header>
                <View style={{ padding: 15 }}>
                    {productStyle.map((post) => (
                        <Card style={{ marginLeft: 20, marginRight: 20 }}>
                            <CardContent>
                                <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: '#6b7f94', fontWeight: 'bold' }}>
                                        {post.productStyle}</Text>
                                </View>
                                <Divider style={{ backgroundColor: '#6b7f94', height: 2 }} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 18 }}>
                                    <Text style={[styles.baseText1, { paddingBottom: 10 }]}>
                                        <Icon name='ios-image' color='#8C7599' size={20} />
                                    商品圖片</Text>
                                    <View style={{ flexDirection: 'row', marginBottom: 8, justifyContent: 'flex-end' }}>
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
                                                source={{ uri: post.productPhoto }}
                                            />
                                        </View>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Text style={[styles.baseText1, { paddingBottom: 10 }]}>
                                            <Icon name='ios-wallet' color='#8C7599' size={20} />價格:{post.productPrice}</Text>
                                        <View style={styles.textInputStyle}>
                                            <TextInput
                                                placeholder={post.productPrice}
                                                underlineColorAndroid="transparent"
                                                placeholderTextColor="#8C7599"
                                                value={post.productPrice}
                                                //onChangeText={text => setProductStyles({...productStyles, productPrice: text})}
                                                style={{ margin: 10, padding: 10 }}
                                                maxLength={10}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Text style={[styles.baseText1, { paddingBottom: 10 }]}>
                                            <Icon name='ios-file-tray' color='#8C7599' size={20} />庫存:</Text>
                                        <View style={styles.textInputStyleSign}>
                                            <TextInput
                                                placeholder={post.productStock}
                                                underlineColorAndroid="transparent"
                                                placeholderTextColor="#8C7599"
                                                value={post.productStock}
                                                //onChangeText={text => setProductStyles({...productStyles, productStock: text})}
                                                style={{ margin: 10, padding: 10 }}
                                                maxLength={10}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </CardContent>
                        </Card>
                    ))}
                    {/* <TouchableOpacity style={[styles.button, { width: 100, margin: 30 }]} onPress={send}> */}
                    <TouchableOpacity style={[styles.button, { width: 100, margin: 30 }]}> 
                        <Text style={{ color: "#FFFF", fontWeight: "bold" }}>完成</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}