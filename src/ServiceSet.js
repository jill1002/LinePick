import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Button, Dimensions, TextInput } from 'react-native';
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
export default function ServiceSet({ navigation, route,value}) {
    const [replys, setReplys] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    // const [value, setValue] = useState(value);
  console.log(value)
    useEffect(() => {
        async function fetchData () {
        console.log("in fetchData");
            
        const SellerQA = await axios.get('http://aaa0e7f5b550.ngrok.io/Reply');
          //const result = await axios.get('http://localhost:8080/Orderlist/'+orderlistStatus);
          setReplys(SellerQA.data);
          
        }
        fetchData();
        
      },[modalVisible]);

  function hide() {

    setModalVisible(false);

  }

  function update() {

    setModalVisible(false);

  }

  function MyServiceSet(){
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
                <View style={{ flex: 10}}>
                    <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center">
                     填寫範例
                    </Divider>
                    </View>
                    <View style={{marginTop:10}}>
                    <Card style={{marginLeft:10,marginRight:10,backgroundColor:"#dbebf0"}}>
                        <CardContent style={{padding:10}}>
                            
                            <View style={{flexDirection: 'row',flexWrap: "wrap"}} >
                            
                            <Text style={{color: "#6b7f94", fontSize:15}}><Info name='info' color="#6b7f94" size={20} style={{width: 30,marginLeft:5 }} />
                            {" "}設定賴皮客服讓聊天機器人</Text>
                            <Text style={{color: "#6b7f94", fontSize:15}}>{"     "}幫你自動回覆常見的問題吧～</Text>
                            </View>
                            <View>
                                <Text style={{color: "#6b7f94", fontSize:16}}>
                                    {"\n"}範例:
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:20, marginTop:10}}>
                            <Text style={{color: "#6b7f94", fontSize: 20}}>Q: </Text>
                            <Text style={[styles.CardContentText,{marginLeft:10}]}>請問何時會出貨?</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop:20, marginLeft:20}}>
                            <Text style={{color: "#6b7f94", fontSize: 20}}>A: </Text>
                            <Text style={[styles.CardContentText,{marginLeft:10}]}>大概下單的三天後</Text>
                            </View>
                            
                        </CardContent>
                        </Card> 
                </View></View>

                
                    <View style={{ flex: 10, marginTop:10, paddingTop:15 }}>
                    <Divider borderColor="#6b7f94" color="#6b7f94" orientation="center">
                     Q & A
                    </Divider>
                    </View>
                    <View style={{marginBottom:300}}>
                        {replys.map((reply) => (
                        <Card style={[styles.ordercard]}>
                            <CardContent style={{padding:3}}>
                            <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10}}>
                            <Text style={{color: "#6b7f94", fontSize: 20}}>Q: </Text>
                            <Text style={[styles.CardContentText,{fontSize:15}]}>{reply.replyQuestion}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop:20}}>
                            <Text style={{color: "#6b7f94", fontSize: 20}}>A: </Text>
                            <Text style={[styles.CardContentText,{fontSize:15}]}>{reply.replyAnswer}</Text>
                            </View>
                            <View style={{marginLeft:40, flexDirection:'row'}}>
                                <TouchableOpacity style={[styles.multibuttons,{paddingLeft:20, paddingRight:20}]} onPress={() => navigation.navigate('客服編輯', {replyid: reply.replyId})}>
                                    <Text style={{color:'#D8D8EB'}}>修改</Text>
                                </TouchableOpacity>   
                            </View>
                            </CardContent>
                            </Card> 
                             ))}
                        </View>
            <Fab buttonColor="#8696a7" onPress={() => setModalVisible(true)} style={{position:"absolute", marginBottom:600}}>
              <Icon name="md-add" size={26} />
            </Fab>
            <QAadd modalVisible={modalVisible} hide={hide} />
            </ScrollView>
        </View >

    );
}

return (


    <Stack.Navigator  screenOptions={{ headerShown: false }}>

      <Stack.Screen name="賴皮客服" component={MyServiceSet} />

      <Stack.Screen name="客服編輯" component={ServiceEdit} />

    </Stack.Navigator>

 );
}