import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Button, Dimensions, TextInput, DeviceEventEmitter } from 'react-native';
import styles from '../styles.js'
import { Header, Left, Right, Body, Fab } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Card, CardTitle, CardContent, CardImage } from "react-native-cards";
import Info from 'react-native-vector-icons/Feather';
import Divider from 'react-native-divider';
import axios from 'axios';
import QAadd from './QAadd';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceEdit from './ServiceEdit';

const Stack = createStackNavigator();
export default function ServiceSet({ navigation, route, value }) {
    const [replys, setReplys] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [change, setChange] = useState(0);
    // const [value, setValue] = useState(value);

    useEffect(() => {
        async function fetchData() {
            console.log("in fetchData");
            const SellerQA = await axios.get('http://41d4417b19ff.ngrok.io/Reply');
            //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
            setReplys(SellerQA.data);
        }
        fetchData();
    }, [modalVisible, change]);

    function hide() {
        setModalVisible(false);
    }

    function update() {
        setModalVisible(false);
    }

    function backHere() {
        console.log("hi");
        setChange((change) => change + 1);
    }

    function deleteService(props){
        axios.delete("http://41d4417b19ff.ngrok.io/ReplyDelete/" + props.reply_id)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        console.log("reply_id:"+props.reply_id);
        setModalVisible(false);
        alert('刪除成功!');
    }

    function MyServiceSet() {
        return (
            <View style={{ backgroundColor: '#f4f3eb' }}>
                <ScrollView>
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
                            <Text style={{ fontSize: 22, color: "#77773c", fontWeight: 'bold' }}>賴皮客服</Text>
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
                    <View style={{ marginTop: 25 }}>
                        <View style={{ flex: 10 }}>
                            <TouchableOpacity buttonColor="#8696a7" style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 20 }} onPress={() => setModalVisible(true)} position="bottomRight">
                                <Text style={{ fontSize: 20, color: "#8C7599", fontWeight: "bold" }}> <Icon name="ios-add-circle" size={20} style={{ color: "#8C7599" }} /> 新增</Text>
                            </TouchableOpacity>
                            <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center">
                                填寫範例
                            </Divider>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Card style={{ marginLeft: 10, marginRight: 10, backgroundColor: "#c8d3c5" }}>
                                <CardContent style={{ padding: 10 }}>
                                    <View style={{ flexDirection: 'row', flexWrap: "wrap" }} >
                                        <Text style={{ color: "#8C7599", fontSize: 15, fontWeight:'bold' }}><Info name='info' color="#8C7599" size={20} style={{ width: 30, marginLeft: 5 }} />
                                            {" "}設定賴皮客服讓聊天機器人</Text>
                                        <Text style={{ color: "#8C7599", fontSize: 15, fontWeight:'bold' }}>{"      "}幫你自動回覆常見的問題吧～</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "#6b7f94", fontSize: 16 }}>
                                            {"\n"}範例:
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 10 }}>
                                        <Text style={{ color: "#6b7f94", fontSize: 20 }}>Q: </Text>
                                        <Text style={[styles.CardContentText, { marginLeft: 10 }]}>請問何時會出貨?</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 }}>
                                        <Text style={{ color: "#6b7f94", fontSize: 20 }}>A: </Text>
                                        <Text style={[styles.CardContentText, { marginLeft: 10 }]}>大概下單的三天後</Text>
                                    </View>
                                </CardContent>
                            </Card>
                        </View></View>


                    <View style={{ flex: 10, marginTop: 10, paddingTop: 15 }}>
                        <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center">
                            Q & A
                    </Divider>
                    </View>
                    <View style={{ marginBottom: 300 }}>
                        {replys.map((reply) => (
                            <Card style={[styles.ordercard]}>
                                <CardContent style={{ padding: 3 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{ color: "#6b7f94", fontSize: 20 }}>Q: </Text>
                                        <Text style={[styles.CardContentText, { fontSize: 15 }]}>{reply.replyQuestion}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                        <Text style={{ color: "#6b7f94", fontSize: 20 }}>A: </Text>
                                        <Text style={[styles.CardContentText, { fontSize: 15 }]}>{reply.replyAnswer}</Text>
                                    </View>
                                    <View style={{ marginLeft: 40, flexDirection: 'row', justifyContent: "flex-end" }}>
                                        <TouchableOpacity style={{ paddingLeft: 20, paddingRight: 20, flexDirection: "row", marginTop: 20 }} onPress={() => navigation.navigate('客服編輯', { callback: backHere, replyid: reply.replyId })}>
                                            <Text style={{ color: '#8C7599', fontWeight: "bold", fontSize: 18 }}><Icon name='ios-pencil' color='#8C7599' size={18} />修改</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }} onPress={()=>deleteService({reply_id :reply.replyId})}>
                                            <Text style={{ color: '#8C7599', fontWeight: "bold", fontSize: 18 }}><Icon name='ios-trash-bin' color='#8C7599' size={18} />刪除</Text>
                                        </TouchableOpacity>
                                    </View>
                                </CardContent>
                            </Card>
                        ))}
                    </View>
                    <QAadd modalVisible={modalVisible} hide={hide} />
                </ScrollView>
            </View >
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="賴皮客服" component={MyServiceSet} />
            <Stack.Screen name="客服編輯" component={ServiceEdit} />
        </Stack.Navigator>
    );
}