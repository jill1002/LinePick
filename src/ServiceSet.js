import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Button, Dimensions, TextInput } from 'react-native';
import styles from '../styles.js'
import { Header, Left, Right, Body } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';


export default function ServiceSet({navigation }) {
    const [text, setText] = useState('');
    return (
        <View style={[styles.container]}>
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
                <View style={{ backgroundColor: '#f9e7d2', marginTop: 20 }}>
                    <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={styles.baseText}>範例:</Text>
                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: "center", paddingHorizontal: 25 }}>
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <View style={[styles.textarea, { flexDirection: 'column', width: '100%', paddingVertical: 10 }]}>

                                <View style={{ flex: 1, marginBottom: 10 }}>
                                    <Text style={styles.baseText}>Q:到貨時間</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.baseText}>A:現貨商品將於3日內出貨</Text>
                                </View>


                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: "center", paddingHorizontal: 25 }}>
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <View style={[styles.textarea, { flexDirection: 'column', width: '100%', paddingVertical: 10 }]}>

                                <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.baseText}>Q:</Text>
                                    </View>
                                    <TextInput
                                        style={{ flex: 1 }}
                                        onChangeText={setText}
                                        value={text}
                                        multiline={true}
                                        placeholder={'請輸入10字以內問題。'}
                                    />
                                </View>
                                <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.baseText}>A:</Text>
                                    </View>
                                    <TextInput
                                        style={{ flex: 1 }}
                                        onChangeText={setText}
                                        value={text}
                                        multiline={true}
                                        placeholder={'請輸入回覆訊息。'}
                                    />
                                </View>


                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: 150 }]}>
                    <Text style={styles.buttonText}>儲存</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>

    );
}