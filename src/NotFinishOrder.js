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
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import CheckOrders from './CheckOrders';

const Stack = createStackNavigator();
export default function NotFinishOrder({ navigation, route }) {
    
    const [orderlists, setOrderlists] = useState([]);
    const orderListStatus="未出貨";
    const [orderlistId, setOrderListId ]= useState(orderlists.orderListId);
    const [paytype, setPayType] = useState(orderlists.payType);
    const [paystatus, setPayStatus] = useState(orderlists.payStatus);
    const [orderliststatus, setOrderListStatus] = useState(orderlists.orderListStatus);
    const [orderlistpayment, setOrderListPayment] = useState(orderlists.orderListPayment);
    const [orderdate, setOrderDate] = useState(orderlists.orderDate);
    const [pickmoneyuse, setPickmoneyUse] = useState(orderlists.pickmoneyUse);
    const [buyerid, setBuyerId] = useState(orderlists.buyerId);
    const [value, setValue] = useState(0);

    useEffect(() => {
        async function fetchData () {
        console.log("in fetchData");
        
        const orderListCard = await axios.get('http://dde74ced07f9.ngrok.io/Orderlist/'+orderListStatus);
          //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
          setOrderlists(orderListCard.data);
      
        }
        fetchData();
      },[value]);
    function changeStatus(index){
        setOrderListStatus("運送中")
        setValue((value)=>value+1);
        const orderInfo={
            orderListId: orderlists[index].orderListId,
            payType: orderlists[index].payType,
            payStatus: orderlists[index].payStatus,
            orderListStatus: "運送中",
            orderListPayment: orderlists[index].orderListPayment,
            orderDate: orderlists[index].orderDate,
            pickmoneyUse: orderlists[index].pickmoneyUse,
            buyerId: orderlists[index].buyerId
        }
        axios.put("http://0e2dceb73099.ngrok.io/OrderStatus/", orderInfo)
        .then(res => {
            console.log(res);
            console.log(res.data);
            
          });

    }

function MyNotFinishOrder(){
      
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
                    <View style={{ flex: 10, marginTop:10, paddingTop:15 }}>
                    <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center">
                     未出貨訂單
                    </Divider>
                    </View>
                    <View style={{marginBottom: 500, paddingTop:15}}>
                        
                    {orderlists.map((orderlist,index) => (
                        
                    <Card style={styles.ordercard} >
                        <CardContent style={{padding:10}}>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 50}]}>訂單編號: {orderlist.orderListId}</Text>
                            <Text style={[styles.CardContentText, {marginLeft:50}]}>姓名: {orderlist.buyerName}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 40}]}>訂購日期: {orderlist.orderDate}</Text>
                            <Text style={styles.CardContentText}>付款狀態: {orderlist.payStatus}</Text>
                            </View>
                            <View style={{marginLeft:45, flexDirection:'row'}}>
                                
                                <TouchableOpacity style={styles.multibuttons} onPress={() => navigation.navigate('訂單詳細資訊', { orderlistId: orderlist.orderListId, orderStatus: orderlist.orderListStatus })}>
                                    <Text style={{color:'#D8D8EB'}}>詳細資訊</Text>
                                </TouchableOpacity>   
                            <Text>{"     "}</Text>
                                <TouchableOpacity style={[styles.multibuttons, { marginHorizontal: 20 }]} onPress={() => changeStatus(index)}>
                                    
                                    <Text style={{color:'#D8D8EB'}}>出 貨</Text>
                                </TouchableOpacity>
                            </View>
                        </CardContent>
                        </Card> 
                         ))}
                    </View>
                    
                </View>
            
        </View>
        </ScrollView>
    );
}

return (


    <Stack.Navigator  screenOptions={{ headerShown: false }}>

      <Stack.Screen name="未出貨訂單" component={MyNotFinishOrder} />

      <Stack.Screen name="訂單詳細資訊" component={CheckOrders} />

    </Stack.Navigator>

 );

}