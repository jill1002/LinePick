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


export default function CheckOrders({ navigation }) {
    

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
                    <View style={{ flex: 10, marginTop:30, paddingTop:50 }}>
                    <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center">
                     訂單資訊
                    </Divider>
                    </View>
                    <View style={{paddingBottom:300, paddingTop:15, marginTop:20}}>
                    
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 35}]}>交易日期: </Text>
                            <Text style={[styles.CardContentText, {marginLeft: 143}]}>11/11</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 35}]}>訂單編號: </Text>
                            <Text style={[styles.CardContentText, {marginLeft: 143}]}>1111</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 35}]}>買家姓名:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 150}]}>Candy</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 35}]}>付款方式:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 149}]}>匯款</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 35}]}>購買數量:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 150}]}>3</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 35}]}>購物金折抵:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 130}]}>30</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 35}]}>實付金額:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 148}]}>300</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 35}]}>付款狀態:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 150}]}>Y</Text>
                            </View>
                            <View style={{ flex: 10, marginTop:60}}>
                    <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center" >
                     LINE PICK
                    </Divider>
                    </View>
                     
                    </View>
                   
                </View>
            
        </View>
        </ScrollView>
    );
}