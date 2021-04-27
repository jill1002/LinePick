import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Button, Dimensions, TextInput, Image } from 'react-native';
import styles from '../styles.js'
import { Header, Left, Right, Body } from "native-base";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import Divider from 'react-native-divider';
import { Card, CardTitle, CardContent, CardImage } from "react-native-cards";
import { color } from 'react-native-reanimated';


export default function NotFinishOrder({ navigation }) {
    

    return (
        <ScrollView>
        <View style={{ backgroundColor: '#c8d3c5' }}>
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
                    <Text style={{ fontSize: 22, color: "#77773c", fontWeight: 'bold' }}>LINEPICK</Text>
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
            
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flex: 10, marginTop:10, paddingTop:15 }}>
                    <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center">
                     未出貨訂單
                    </Divider>
                    </View>
                    <View style={{paddingBottom:90, paddingTop:15}}>
                    <Card style={styles.ordercard}>
                        <CardContent style={{padding:10}}>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 50}]}>訂單編號: 1234</Text>
                            <Text style={styles.CardContentText}>姓名: Candy</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 40}]}>訂購日期: 11/11</Text>
                            <Text style={styles.CardContentText}>付款狀態: 1234</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignSelf:'center'}}>
                                {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                                <TouchableOpacity style={styles.multibuttons}>
                                    <Text style={{color:'#D8D8EB'}}>詳細資訊</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.multibuttons, { marginHorizontal: 20 }]}>
                                    <Text style={{color:'#D8D8EB'}}>出 貨</Text>
                                </TouchableOpacity>
                            </View>
                        </CardContent>
                        </Card> 
                <Card style={styles.ordercard}>
                        <CardContent style={{padding:10}}>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 50}]}>訂單編號: 1234</Text>
                            <Text style={styles.CardContentText}>姓名: Candy</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 40}]}>訂購日期: 11/11</Text>
                            <Text style={styles.CardContentText}>付款狀態: 1234</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignSelf:'center'}}>
                                {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                                <TouchableOpacity style={styles.multibuttons}>
                                    <Text style={{color:'#D8D8EB'}}>詳細資訊</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.multibuttons, { marginHorizontal: 20 }]}>
                                    <Text style={{color:'#D8D8EB'}}>出 貨</Text>
                                </TouchableOpacity>
                            </View>
                        </CardContent>
                        </Card>
                        <Card style={styles.ordercard}>                   
                        <CardContent style={{padding:10}}>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 50}]}>訂單編號: 1234</Text>
                            <Text style={styles.CardContentText}>姓名: Candy</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 40}]}>訂購日期: 11/11</Text>
                            <Text style={styles.CardContentText}>付款狀態: 1234</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignSelf:'center'}}>
                                {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                                <TouchableOpacity style={styles.multibuttons}>
                                    <Text style={{color:'#D8D8EB'}}>詳細資訊</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.multibuttons, { marginHorizontal: 20 }]}>
                                    <Text style={{color:'#D8D8EB'}}>出 貨</Text>
                                </TouchableOpacity>
                            </View>
                        </CardContent>
                        </Card> 
                        <Card style={styles.ordercard}>                   
                        <CardContent style={{padding:10}}>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 50}]}>訂單編號: 1234</Text>
                            <Text style={styles.CardContentText}>姓名: Candy</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 40}]}>訂購日期: 11/11</Text>
                            <Text style={styles.CardContentText}>付款狀態: 1234</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignSelf:'center'}}>
                                {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                                <TouchableOpacity style={styles.multibuttons}>
                                    <Text style={{color:'#D8D8EB'}}>詳細資訊</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.multibuttons, { marginHorizontal: 20 }]}>
                                    <Text style={{color:'#D8D8EB'}}>出 貨</Text>
                                </TouchableOpacity>
                            </View>
                        </CardContent>
                        </Card>     
                    </View>
                    
                </View>
            
        </View>
        </ScrollView>
    );
}