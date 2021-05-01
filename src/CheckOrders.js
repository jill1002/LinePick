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
import axios from 'axios';

export default function CheckOrders({ navigation,route }) {
    // console.log();
    const [orderlistContents, setOrderlistContents] = useState([""]);

    const orderListId = route.params.orderlistId;
    
    useEffect(() => {
        console.log(orderListId)
        async function fetchData () {
        const orderListCardContent = await axios.get('http://128d9afd7c58.ngrok.io/OrderlistContent/'+orderListId);
          //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
          setOrderlistContents(orderListCardContent.data);
          
        }
        fetchData();
      },[]);
      
    return (
        
        <ScrollView>
        <View style={{ backgroundColor: '#f4f3eb' }}>
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
                    <View style={{ flex: 10, marginTop:30, paddingTop:10 }}>
                    <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center">
                     訂單明細
                    </Divider>
                    </View>
                    
                    <View style={{paddingBottom:100, marginTop:25}}>
                   
                        <View style={{paddingBottom:100, marginTop:25}}>
                        
                        {orderlistContents.map((orderlistContent) => (
                            <View>
                            
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 75}]}>商品名稱:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 30}]}>{orderlistContent.productName}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 75}]}>商品款式:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 30}]}>{orderlistContent.productStyle}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 75}]}>購買數量:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 33}]}>{orderlistContent.orderItemQuantity}</Text>
                            </View></View>))}
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 75}]}>交易日期: </Text>
                            <Text style={[styles.CardContentText, {marginLeft: 25}]}>{orderlistContents[0].orderDate}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 57}]}>購物金折抵:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 33}]}>{orderlistContents[0].pickmoneyUse}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 77}]}>實付金額:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 31}]}>{orderlistContents[0].orderListPayment}</Text>
                            </View>
                            <View style={{ flex: 10, marginTop:60}}>
                            <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center" >
                            基本資訊
                            </Divider>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center', marginTop:25}}>
                            <Text style={[styles.CardContentText, {marginLeft: 77}]}>買家姓名:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 32}]}>{orderlistContents[0].buyerName}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 77}]}>連絡電話:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 32}]}>{orderlistContents[0].buyerPhone}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 77}]}>電子郵件:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 32}]}>{orderlistContents[0].buyerMail}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center', marginBottom:25}}>
                            <Text style={[styles.CardContentText, {marginLeft: 77}]}>收貨地址:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 32}]}>{orderlistContents[0].buyerAddress}</Text>
                            </View>
                            <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center" >
                            付款資訊
                            </Divider>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center', marginTop:25}}>
                            <Text style={[styles.CardContentText, {marginLeft: 77}]}>付款方式:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 32}]}>{orderlistContents[0].payType}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 61}]}>使用購物金:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 29}]}>{orderlistContents[0].pickmoneyUse}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginLeft: 80}]}>付款狀態:</Text>
                            <Text style={[styles.CardContentText, {marginLeft: 30}]}>{orderlistContents[0].payStatus}</Text>
                            </View>
                            </View>
                            
                    </View>
                   
                </View>
            
        </View>
        </ScrollView>
    );
}