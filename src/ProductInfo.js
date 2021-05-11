import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ImageHeaderScrollView, TriggeringView, } from "react-native-image-header-scroll-view";
import { Content } from "native-base";
import { TouchableOpacity, Text, View, TouchableHighlight, ScrollView } from "react-native";
import { IconButton, Colors, Appbar, Title } from 'react-native-paper';
import styles from "../styles";
import SetProduct from './SetProduct';
import { Divider } from 'react-native-elements';
import axios from 'axios';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import Carousel from 'react-native-snap-carousel';

export default function ProductInfo({ route, navigation }) {
    const productName = route.params.productName;
    const productDesc = route.params.productDesc;
    const [productStyles, setProductStyles] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('http://41d4417b19ff.ngrok.io/ProductsInfo/' + productName);
            setProductStyles(result.data);
        }
        fetchData();
    }, []);

    function deleteProduct(){
        axios.delete("http://41d4417b19ff.ngrok.io/ProductDelete/" + productName)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        alert('刪除成功!');
        route.params.callback();
        navigation.goBack();
    }

    return (
        <View>
            <ScrollView style={{ backgroundColor: '#f4f3eb' }}>
                <Appbar.Header
                    style={{ backgroundColor: '#f9e7d2' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Text style={styles.baseText}>商品詳細資訊</Text>
                </Appbar.Header>
                <View style={{ padding: 15 }}>
                    <View style={{ borderColor: "#c8d3c5", borderWidth: 2.5, borderRadius: 10, margin: 10, padding: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 5, margin: 10 }}>
                            <Text style={{ fontSize: 23, color: '#8C7599', fontWeight: 'bold' }}>{productName}</Text>
                        </View>
                        <Divider style={{ backgroundColor: '#6b7f94', height: 1.5 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 15, margin: 10 }}>
                            <Text style={{ fontSize: 15, color: '#8C7599' }}>{productDesc}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 18, marginRight: 15, marginLeft: 15, marginTop: 8 }}>
                        <TouchableOpacity onPress={deleteProduct}>
                            <Text style={{ fontSize: 18, textDecorationLine: 1, color: '#6b7f94', fontWeight: 'bold' }}>
                                <Icon name='ios-trash-bin' color='#6b7f94' size={18} />下架商品
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("SetProduct", { productName: productName, productDesc: productDesc })}>
                            <Text style={{ fontSize: 18, textDecorationLine: 1, color: '#6b7f94', fontWeight: 'bold' }}>
                                修改商品<Icon name='ios-pencil' color='#6b7f94' size={18} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {productStyles.map((post) => (
                        <Card style={{ marginLeft: 40, marginRight: 40 }}>
                            <CardImage
                                source={{ uri: post.productPhoto }}
                                //title={post.productStyle}
                                //singleLineTitle={true}
                                //textStyle={{ color: "#6b7f94", fontSize: 20, fontWeight: "bold"}}
                                //resizeMode="stretch"
                                style={{ height: 230 }}
                            />
                            <CardContent style={{ backgroundColor: "#c8d3c5" }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10, marginTop: 8 }}>
                                    <Text style={{ fontSize: 20, color: '#6b7f94', fontWeight: 'bold' }}>-{post.productStyle}-</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ fontSize: 17, color: "#8C7599" }}>
                                        <Icon name='ios-wallet' color='#8C7599' size={18} />價格:{post.productPrice}</Text>
                                    <Text style={{ fontSize: 17, color: "#8C7599" }}>
                                        <Icon name='ios-file-tray' color='#8C7599' size={18} />庫存:{post.productStock}</Text>
                                </View>
                            </CardContent>
                        </Card>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
