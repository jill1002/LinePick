import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image, Button, Dimensions } from 'react-native';
import styles from '../styles.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Divider } from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton, Colors, Appbar, Title } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';

export default function AddProduct2({ navigation, route }) {

    const productName1 = route.params.productName;
    const productDesc1 = route.params.productDesc;
    const productType1 = route.params.productType;
    const productStyle1 = route.params.productStyle;
    const productTypeId1 = route.params.productTypeId;
    const [productPrice1, setProductPrice] = useState("");
    const [productStock1, setProductStock] = useState("");
    const [selectedImage, setSelectedImage] = useState("https://firebasestorage.googleapis.com/v0/b/line-pick.appspot.com/o/5F5508A1-7A05-4441-B81F-DC80F1946DB1.jpg?alt=media&token=c05e63c6-4b3a-47ff-81ca-7f7303042cb2");

    if (!firebase.apps.length) {
        firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
    }
    console.log("before uploadImage");
    let uploadImage = async (uri) => {
        console.log("in uploadImage");
        const filename = uri.split('/').pop();
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(filename);
        const snapshot = await ref.put(blob);
        var url = await snapshot.ref.getDownloadURL();
        console.log("url:" + url);
        setSelectedImage(url);
        console.log("檔案已上傳");
    }
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (!pickerResult.cancelled) {
            console.log("in openImagePickerAsync");
            console.log(pickerResult.uri);
            console.log("in openImagePickerAsync after");
            //setSelectedImage({ localUri: pickerResult.uri });
            console.log("next go to uploadImage");
            uploadImage(pickerResult.uri);
        }
    }
    function add() {
        console.log("in add");
        console.log(productName1);
        console.log(productDesc1);
        console.log(productType1);
        console.log(productStyle1);
        console.log(productType1);
        console.log(productStyle1);
        console.log(productTypeId1);
        console.log("beforeProduct");
        console.log(selectedImage.url);
        const product = {
            productName: "" + productName1,
            productDesc: "" + productDesc1,
            productPhoto: selectedImage,
            productPrice: productPrice1,
            productStock: productStock1,
            productStyle: "" + productStyle1,
        }
        console.log("in add after");
        axios.put("http://a8324ec7c82c.ngrok.io/ProductAdd/", product)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const productType = {
                    productId: res.data,
                    typeId: productTypeId1
                }
                axios.put("http://a8324ec7c82c.ngrok.io/ProductTypeAdd/", productType)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    });
            });
        navigation.goBack();
        navigation.navigate("我的商品");
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
                    <Card style={{ marginLeft: 18, marginRight: 18, marginTop: 10 }}>
                        <CardContent>
                            <View style={{ margin: 15, flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, color: '#6b7f94', fontWeight: 'bold' }}>
                                    {productStyle1}</Text>
                            </View>
                            <Divider style={{ backgroundColor: '#6b7f94', height: 2, margin: 5 }} />
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
                                            source={{ uri: selectedImage }}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                    <Text style={[styles.baseText1, { paddingBottom: 10 }]}>
                                        <Icon name='ios-wallet' color='#8C7599' size={20} />價格:</Text>
                                    <View style={styles.textInputStyle}>
                                        <TextInput
                                            placeholder="請輸入商品價格"
                                            underlineColorAndroid="transparent"
                                            placeholderTextColor="#8C7599"
                                            value={productPrice1}
                                            onChangeText={text => setProductPrice(text)}
                                            style={{ padding: 10 }}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                    <Text style={[styles.baseText1, { paddingBottom: 10 }]}>
                                        <Icon name='ios-file-tray' color='#8C7599' size={20} />庫存:</Text>
                                    <View style={styles.textInputStyle}>
                                        <TextInput
                                            placeholder="請輸入商品庫存"
                                            underlineColorAndroid="transparent"
                                            placeholderTextColor="#8C7599"
                                            value={productStock1}
                                            onChangeText={text => setProductStock(text)}
                                            style={{ padding: 10 }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </CardContent>
                    </Card>

                    <TouchableOpacity style={[styles.button, { width: 100, height: 43, flexDirection: 'row' }]} onPress={add}>
                        <Icon name='ios-checkmark-done-circle' color='#FFFFFF' size={18} />
                        <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 16 }}>上架</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}