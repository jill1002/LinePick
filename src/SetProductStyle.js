import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import styles from '../styles.js'
import { IconButton, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';
import { Card, CardTitle, CardContent } from 'react-native-material-cards'
import { Divider, Avatar } from 'react-native-elements';
import axios from 'axios';

export default function SetProductStyle({ route, navigation }) {
    const productStyle = route.params.productStyle;
    const [styleInfo, setStyleInfo] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('http://a8324ec7c82c.ngrok.io/StylesInfo/' + productStyle);
            setStyleInfo(result.data);
            setSelectedImage(result.data.productPhoto);
        }
        fetchData();
    }, []);

    if (!firebase.apps.length) {
        firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
      }
      console.log("before uploadImage");
      let uploadImage = async(uri) => {
        console.log("in uploadImage");
        const filename = uri.split('/').pop();
        const response = await fetch(uri);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(filename);
        const snapshot = await ref.put(blob);
        var url = await snapshot.ref.getDownloadURL();
        console.log("url:"+url);
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

    function sendBack() {
        if (styleInfo != [" "]) {
            try {
                const productStyleInfo = {
                    productId: styleInfo.productId,
                    productName: styleInfo.productName,
                    productDesc: styleInfo.productDesc,
                    productPrice: styleInfo.productPrice,
                    productStock: styleInfo.productStock,
                    productPhoto: selectedImage,
                    productStyle: styleInfo.productStyle,
                };

                axios.put("http://a8324ec7c82c.ngrok.io/ProductEdit/", productStyleInfo)
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    });
                route.params.callback();
                navigation.goBack();
            } catch { }
        }
    }


    return (
        <View style={[styles.container]}>
            <ScrollView style={{ backgroundColor: '#f4f3eb' }}>
                <Appbar.Header
                    style={{ backgroundColor: '#f9e7d2' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Text style={styles.baseText}>修改圖片、價格與庫存</Text>
                </Appbar.Header>
                <View>
                    <Card style={{ marginLeft: 30, marginRight: 30, marginTop: 25 }}>
                        <CardContent>
                            <View style={{ margin: 15, flexDirection: 'column', alignItems: 'center' }}>
                                <Avatar rounded icon={{ name: 'edit' }} size={70} overlayContainerStyle={{ backgroundColor: '#b5c4b1' }} />
                                <Text style={{ fontSize: 22, color: '#b5c4b1', fontWeight: 'bold', marginTop: 15 }}>
                                    {styleInfo.productStyle}</Text>
                            </View>
                            <Divider style={{ backgroundColor: '#b5c4b1', height: 2, marginBottom: 8 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 18, marginBottom: 8 }}>
                                <Text style={[styles.baseText, { paddingBottom: 10 }]}>
                                    <Icon name='ios-image' color='#6b7f94' size={20} />
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
                                            source={{ uri: selectedImage}}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginBottom: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 8 }}>
                                        <Text style={[styles.baseText, { paddingBottom: 10 }]}>
                                            <Icon name='ios-wallet' color='#6b7f94' size={20} />價格:</Text>
                                        <Text style={{ color: "#b5c4b1", fontSize: 18 }}>{styleInfo.productPrice}
                                        </Text>
                                    </View>
                                    <View style={[styles.textInputStyle, { marginBottom: 30 }]}>
                                        <TextInput
                                            placeholder="請輸入修改價格"
                                            underlineColorAndroid="transparent"
                                            placeholderTextColor="#8C7599"
                                            style={{ padding: 10 }}
                                            value={styleInfo.productPrice}
                                            onChangeText={text => setStyleInfo({ ...styleInfo, productPrice: text })}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 8 }}>
                                        <Text style={[styles.baseText, { paddingBottom: 10 }]}>
                                            <Icon name='ios-file-tray' color='#6b7f94' size={20} />庫存:</Text>
                                        <Text style={{ color: "#b5c4b1", fontSize: 18 }}>{styleInfo.productStock}
                                        </Text>
                                    </View>
                                    <View style={styles.textInputStyle}>
                                        <TextInput
                                            placeholder="請輸入修改庫存"
                                            underlineColorAndroid="transparent"
                                            placeholderTextColor="#8C7599"
                                            style={{ padding: 10 }}
                                            value={styleInfo.productStock}
                                            onChangeText={text => setStyleInfo({ ...styleInfo, productStock: text })}
                                        />
                                    </View>
                                </View>
                            </View>
                        </CardContent>
                    </Card>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', padding: 20, marginBottom: 30, }} onPress={sendBack}>
                    <Icon name='ios-chevron-back-circle-outline' color='#8C7599' size={22} />
                    <Text style={{ color: "#8C7599", fontWeight: "bold", fontSize: 20, textDecorationLine: 1 }}>修改完成，回前頁</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>

    );
}