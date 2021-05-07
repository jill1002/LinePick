import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image, Button, Dimensions } from 'react-native';
import styles from '../styles.js'
import { IconButton, Colors, Appbar, Title } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Divider } from 'react-native-elements';

export default function SetProduct2({ route, navigation }) {
    const productName = route.params.productName;
    const productNameEnd = route.params.productNameEnd;
    const productDesc = route.params.productDesc;

    const [productStyle, setProductStyle] = useState([]); 
    useEffect(() => {
        async function fetchData() {
            console.log("fetch1"+productName);
            const result1 = await axios.get('http://42c21ae11ac0.ngrok.io/ProductsInfo/' + productName);
            console.log("fetch2");
            const temp = 
            [{productName:"白色戀人巧克力",
            productDesc:"及後有黑色的牛奶巧克力口味。",
            productPrice:700,
            productPhoto:"https://firebasestorage.googleapis.com/v0/b/line-pick-5da9a.appspot.com/o/%E7%99%BD%E8%89%B2%E6%88%80%E4%BA%BA.jpg?alt=media&token=46dbaec3-21ee-471e-bd7e-0d24dd5743f2",
            productStyle:"黑巧克力(24入)",
            productStock:91,
            productId:1},
            /*
            {productName:"白色戀人巧克力",
            productDesc:"及後有黑色的牛奶巧克力口味。",
            productPrice:700,
            productPhoto:"https://firebasestorage.googleapis.com/v0/b/line-pick-5da9a.appspot.com/o/%E7%99%BD%E8%89%B2%E6%88%80%E4%BA%BA.jpg?alt=media&token=46dbaec3-21ee-471e-bd7e-0d24dd5743f2",
            productStyle:"白巧克力(24入)",
            productStock:100,
            productId:2}
            */
        ];
        /*
            setProductStyles(
                [{productName:"123",
                productDesc:"133",
                productPrice:700,
                productPhoto:"",
                productStyle:"123",
                productStock:91,
                productId:1},

            ]
            );
            */
            setProductStyle(result1.data);
            console.log(result1.data);
            const result2 = await axios.get('http://42c21ae11ac0.ngrok.io/ProductsId/' + productName);
            console.log(result2.data);
            setProductId(result2.data);

        }
        fetchData();
    }, []);

    const [productId, setProductId] = useState([]); //找productId
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('http://42c21ae11ac0.ngrok.io/ProductsId/' + productName);
            setProductId(result.data);
        }
        //fetchData();
    }, []);
/*
    function send() {
        const Product = {
            productId: productId.productId,
            productName: productNameEnd,
            productDesc: productDesc,
            productPrice: productStyles.productPrice,
            productStock: productStyles.productStock,
            //productStyle: productStyle,
        };
        axios.put("http://42c21ae11ac0.ngrok.io/ProductEdit/", Product)
            .then(res => {
                console.log(res);
                console.log(res.data);
                props.hide();
            });
    }
    */

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