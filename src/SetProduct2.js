import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import styles from '../styles.js'
import { IconButton, Appbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Divider } from 'react-native-elements';
import SetProductStyle from './SetProductStyle';
import axios from 'axios';

export default function SetProduct2({ route, navigation }) {
    const productName = route.params.productName;

    function checkProduct() {
        const [productStyles, setProductStyles] = useState([]);
        useEffect(() => {
            async function fetchData() {
                const result = await axios.get('http://41d4417b19ff.ngrok.io/ProductsInfo/' + productName);
                setProductStyles(result.data);
            }
            fetchData();
        }, []);

        function send() {
            if (productStyles != [""]) {
                try {
                    for (var i = 0; i < productStyles.length; i++) {
                        console.log(productStyles[i].productStyle);
                        const productEdit = {
                            productId: productStyles[i].productId,
                            productName: productStyles[i].productName,
                            productDesc: productStyles[i].productDesc,
                            productPrice: productStyles[i].productPrice,
                            productStock: productStyles[i].productStock,
                            productPhoto: productStyles[i].productPhoto,
                            productStyle: productStyles[i].productStyle,
                        };

                        axios.put("http://41d4417b19ff.ngrok.io/ProductEdit/", productEdit)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                                props.hide();
                            });
                    }
                    navigation.navigate("我的商品");
                } catch { }
            }
        }
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
                    {productStyles.map((post, index) => (
                        <View key={index}>
                            <Card style={{ marginLeft: 35, marginRight: 35, marginTop: 30 }}>
                                <CardImage
                                    source={{ uri: post.productPhoto }}
                                    singleLineTitle={true}
                                    resizeMode="stretch"
                                    style={{ height: 230 }}
                                />
                                <CardContent>
                                    <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 23, color: '#8C7599', fontWeight: 'bold', padding: 5 }}>
                                            {post.productStyle}</Text>
                                    </View>
                                    <Divider style={{ backgroundColor: '#b5c4b1', height: 2, marginBottom: 8 }} />
                                    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Text style={[styles.baseText, { paddingBottom: 10 }]}>
                                                <Icon name='ios-wallet' color='#6b7f94' size={20} />價格:</Text>
                                            <Text style={{ color: "#8C7599", fontSize: 18 }}>{post.productPrice}
                                            </Text>

                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Text style={styles.baseText}>
                                                <Icon name='ios-file-tray' color='#6b7f94' size={20} />庫存:</Text>
                                            <Text style={{ color: "#8C7599", fontSize: 18 }}>{post.productStock}
                                            </Text>
                                        </View>
                                    </View>
                                </CardContent>
                                <CardAction
                                    separator={true}
                                    inColumn={false}
                                    style={{ backgroundColor: "#c8d3c5", justifyContent: 'center' }}
                                >
                                    <CardButton
                                        onPress={() => navigation.navigate("SetProductStyle", { productStyle: post.productStyle})}
                                        title="修改圖片、價格與庫存"
                                        color="#8C7599"
                                        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
                                    />
                                </CardAction>
                            </Card>
                        </View>
                    ))}
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', padding: 20, marginBottom: 30, }} onPress={send}>
                        <Icon name='ios-checkmark-done-sharp' color='#6b7f94' size={25} />
                        <Text style={{ color: "#6b7f94", fontWeight: "bold", fontSize: 23, textDecorationStyle: 'double', textDecorationLine: 1 }}>完成</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="checkProduct" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="checkProduct" component={checkProduct} />
            <Stack.Screen name="SetProductStyle" component={SetProductStyle} />
        </Stack.Navigator>
    );
}