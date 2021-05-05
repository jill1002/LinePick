import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles';
import { Header, Left, Right, Body, Button } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import SetProduct from './SetProduct';
import ProductInfo from './ProductInfo';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { Divider } from 'react-native-elements';

export default function ProductType({ route }) {
    const typeId = route.params.typeId;

    function myProductType({ navigation }) {
        const [types, setTypes] = useState([]); //tab的type
        useEffect(() => {
            async function fetchData() {
                const result = await axios.get('http://42c21ae11ac0.ngrok.io/Type');
                setTypes(result.data);
            }
            fetchData();
        }, []);

        const [products, setProducts] = useState([]); //分類後的商品資訊
        useEffect(() => {
            async function fetchData() {
                const result = await axios.get('http://42c21ae11ac0.ngrok.io/SecondType/' + typeId);
                setProducts(result.data);
            }
            fetchData();
        }, []);

        return (
            <View >
                <ScrollView style={{ backgroundColor: '#f4f3eb' }}>
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
                            <TouchableOpacity onPress={() => navigation.navigate("myProduct")}>
                                <Text style={{ fontSize: 22, color: "#77773c", fontWeight: 'bold' }}>我的商品</Text>
                            </TouchableOpacity>
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
                    <Header>
                        <Body style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            {types.map((type) => (
                                <TouchableOpacity><Text style={{ color: '#8C7599', fontWeight: 'bold' }}>{type.typeName}</Text></TouchableOpacity>
                            ))}
                        </Body>
                    </Header>


                    {products.map((post) => (
                        <View>
                            <Card style={{ margin: 15, marginLeft: 40, marginRight: 40, borderColor: '#b5c4b1', borderWidth: 3 }}>
                                <CardImage
                                    source={{ uri: post.productPhoto }}
                                    //title={post.productName}
                                    singleLineTitle={true}
                                    //textStyle={{ color: "#6b7f94", fontSize: 20, fontWeight: "bold" }}
                                    resizeMode="stretch"
                                    style={{ height: 230 }}
                                />
                                <CardContent>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 8 }}>
                                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#8C7599' }}>{post.productName}</Text>
                                    </View>
                                    <Divider style={{ backgroundColor: '#6b7f94', height: 1, margin: 5 }} />
                                    <Text style={{ padding: 5 }}>{post.productDesc}</Text>
                                </CardContent>
                                <CardAction
                                    separator={true}
                                    inColumn={false}
                                    style={{ backgroundColor: "#c8d3c5", justifyContent: 'space-around' }}
                                >
                                    <CardButton
                                        onPress={() => navigation.navigate("ProductInfo", { productName: post.productName, productPhoto: post.productPhoto, productDesc: post.productDesc })}
                                        title="商品詳細資訊"
                                        color="#8C7599"
                                        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
                                    />
                                    <CardButton
                                        onPress={() => navigation.navigate("SetProduct", { productName: post.productName, productPhoto: post.productPhoto, productDesc: post.productDesc })}
                                        title="修改商品"
                                        color="#8C7599"
                                        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
                                    />
                                </CardAction>
                            </Card>
                        </View>
                    ))
                    }
                </ScrollView>
            </View>
        );
    }

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="myProductType" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="myProductType" component={myProductType} />
            <Stack.Screen name="ProductInfo" component={ProductInfo} />
            <Stack.Screen name="SetProduct" component={SetProduct} />
        </Stack.Navigator>
    );
}