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
export default function TransportOrder({ navigation, route }) {
    
    const [orderlists, setOrderlists] = useState([]);
    const orderListStatus="運送中";
    useEffect(() => {
        async function fetchData () {
        console.log("in fetchData");
        
        const orderListCard = await axios.get('http://dde74ced07f9.ngrok.io/Orderlist/'+orderListStatus);
          //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
          setOrderlists(orderListCard.data);
             
        }
        fetchData();
      },[]);
function MyTransportOrder(){
      
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
                     運送中訂單
                    </Divider>
                    </View>
                    <View style={{marginBottom: 500, paddingTop:15}}>
                        
                    {orderlists.map((orderlist) => (
                        
                    <Card style={styles.ordercard}>
                        <CardContent style={{padding:10}}>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 50}]}>訂單編號: {orderlist.orderListId}</Text>
                            <Text style={[styles.CardContentText, {marginLeft:50}]}>姓名: {orderlist.buyerName}</Text>
                            </View>
                            <View style={{flexDirection: 'row',padding: 5, alignItems: 'center'}}>
                            <Text style={[styles.CardContentText, {marginRight: 40}]}>訂購日期: {orderlist.orderDate}</Text>
                            <Text style={styles.CardContentText}>付款狀態: {orderlist.payStatus}</Text>
                            </View>
                            <View style={{marginLeft:20, flexDirection:'row'}}>
                                
                                <TouchableOpacity style={styles.multibuttons} onPress={() => navigation.navigate('訂單詳細資訊', { orderlistId: orderlist.orderListId, orderStatus: orderlist.orderListStatus })}>
                                    <Text style={{color:'#D8D8EB'}}>詳細資訊</Text>
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

      <Stack.Screen name="運送中訂單" component={MyTransportOrder} />

      <Stack.Screen name="訂單詳細資訊" component={CheckOrders}  />

    </Stack.Navigator>

 );

}