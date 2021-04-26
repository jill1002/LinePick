import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import styles from '../styles';
import { Header, Left, Right, Body } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import SetProduct from './SetProduct';
import { createStackNavigator } from '@react-navigation/stack';

export default function ProductLaunch() {

    function myProduct({ navigation }) {
        const productPosts = [
            {
                product_photo: 'https://firebasestorage.googleapis.com/v0/b/line-pick-5da9a.appspot.com/o/%E7%99%BD%E8%89%B2%E6%88%80%E4%BA%BA.jpg?alt=media&token=46dbaec3-21ee-471e-bd7e-0d24dd5743f2',
                product_name: '白色戀人巧克力',
                product_type: '零食',
                product_desc: '是北海道一種著名的巧克力夾心薄餅，於2塊餅乾中夾著一層的白巧克力。及後有黑色的牛奶巧克力口味。',
            },
            {
                product_photo: 'https://firebasestorage.googleapis.com/v0/b/line-pick-5da9a.appspot.com/o/%E9%9B%99%E5%B1%A4%E7%8E%BB%E7%92%83%E6%9D%AF.jpg?alt=media&token=215bb4d4-0ecb-4daf-95bd-bc45e706266f',
                product_name: '韓國星巴克櫻花杯',
                product_type: '生活雜貨',
                product_desc: '2021年的櫻花系列 3月16日正式在韓國販售',
            },
        ];

        return (
            <View style={styles.container}>
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
                        <Text style={{ fontSize: 22, color: "#77773c", fontWeight: 'bold' }}>我的商品</Text>
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
                <ScrollView>
                    {productPosts.map((post) => (
                        <View style={styles.borderStyle}>
                            <Card style={{ borderRadius: 20, maxWidth: '100%' }}>
                                <View >
                                    <Card.Cover source={{ uri: post.product_photo }} style={{ borderTopStartRadius: 20, borderTopEndRadius: 20, maxWidth: '100%' }} />
                                    <Card.Content>
                                        <Title style={{ color: "#8C7599", fontSize: 23, marginTop: 8 }}>{post.product_name}</Title>
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-around', padding: 5 }}>
                                                <Text style={{ fontSize: 18, color: "#77773c" }}>商品描述:</Text>
                                                <Text style={{ fontSize: 15 }}>{post.product_desc}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-around', padding: 5 }}>
                                                <Text style={{ fontSize: 18, color: "#77773c" }}>商品分類:</Text>
                                                <Text style={{ fontSize: 15 }}>{post.product_type}</Text>
                                            </View>
                                        </View>
                                    </Card.Content>
                                </View>
                                <Card.Actions style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <TouchableOpacity style={[styles.button, { width: 140, justifyContent: 'center' }]} onPress={() => navigation.navigate("SetProduct")}>
                                        <Text style={styles.buttonText1}>修改商品</Text>
                                    </TouchableOpacity>
                                </Card.Actions>
                            </Card>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="myProduct" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="myProduct" component={myProduct} />
            <Stack.Screen name="SetProduct" component={SetProduct} />
        </Stack.Navigator>
    );
}