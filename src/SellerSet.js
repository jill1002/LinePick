import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import { Header, Left, Right, Body } from "native-base";
import styles from '../styles.js'
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import axios from 'axios';
import { Divider } from 'react-native-elements';
import SellerSetEdit from './SellerSetEdit';
import { Avatar} from 'react-native-elements';

export default function SellerSet({ navigation }) {
    const [seller, setSeller] = useState([]);
    const id = 1;
    const [types, setTypes] = useState([]); //賣場商品分類
    const [change, setChange] = useState(0);

    useEffect(() => {
        async function fetchData() {
            console.log("SellerSet fetchData 1");
            console.log(id);
            const result = await axios.get('http://41d4417b19ff.ngrok.io/SellerSet/' + id);
            console.log(result.data);
            setSeller(result.data);
            const type = await axios.get('http://41d4417b19ff.ngrok.io/Type');
            setTypes(type.data);
            console.log("SellerSet fetchData 2");
            console.log(type.data);
        }
        fetchData();
    }, [change]);

        function backHere(){
            console.log("backHere");
            setChange((change)=>change+1);
            alert('更新成功!')
        }

    function setPage() {
        return (
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
                        <Text style={{ fontSize: 22, color: "#77773c", fontWeight: 'bold' }}>賣場設定</Text>
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
                <View style={{ padding: 10, marginBottom: 25 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 18, }}>
                        <TouchableOpacity onPress={() => navigation.navigate("SellerSetEdit",{callback: backHere})}>
                            <Text style={{ fontSize: 18, textDecorationLine: 1, color: '#6b7f94', fontWeight: 'bold' }}>
                                點我編輯<Icon name='ios-pencil' color='#6b7f94' size={18} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.marketBorder}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: -50, marginBottom: 25 }}>
                            <Avatar rounded icon={{ name: 'person' }} size={70} overlayContainerStyle={{ backgroundColor: '#b5c4b1' }} />
                            <Text style={{ fontSize: 20, color: '#b5c4b1', fontWeight: 'bold', marginTop: 8 }}>我的資料</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start' }}>
                            <Text style={styles.baseText}>
                                <Icon name='ios-person-circle' color='#6b7f94' size={20} />
                            使用者帳號:
                    </Text>
                            <Text style={styles.baseText1}>
                                {seller.sellerAccount}
                            </Text>
                        </View>
                        <Divider style={{ backgroundColor: '#b5c4b1', height: 2, marginBottom: 8 }} />
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start' }}>
                            <Text style={styles.baseText}>
                                <Icon name='ios-lock-closed' color='#6b7f94' size={20} />
                            使用者密碼:
                    </Text>
                            <Text style={styles.baseText1}>
                                {seller.sellerPassword}
                            </Text>
                        </View>
                        <Divider style={{ backgroundColor: '#b5c4b1', height: 2, marginBottom: 8 }} />
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start' }}>
                            <Text style={styles.baseText}>
                                <Icon name='ios-call' color='#6b7f94' size={20} />
                            手機號碼:</Text>
                            <Text style={styles.baseText1}>
                                {seller.sellerPhone}
                            </Text>
                        </View>
                        <Divider style={{ backgroundColor: '#b5c4b1', height: 2, marginBottom: 8 }} />
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start' }}>
                            <Text style={styles.baseText}>
                                <Icon name='ios-mail' color='#6b7f94' size={20} />
                            電子郵件:</Text>
                            <Text style={styles.baseText1}>
                                {seller.sellerMail}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.marketBorder, { marginTop: 55 }]}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: -50, marginBottom: 25 }}>
                            <Avatar rounded icon={{ name: 'home' }} size={70} overlayContainerStyle={{ backgroundColor: '#b5c4b1' }} />
                            <Text style={{ fontSize: 20, color: '#b5c4b1', fontWeight: 'bold', marginTop: 10 }}>賣場資訊</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start' }}>
                            <Text style={styles.baseText}>
                                <Icon name='ios-basket' color='#6b7f94' size={20} />
                            賣場名稱:</Text>
                            <Text style={styles.baseText1}>
                                {seller.marketName}
                            </Text>
                        </View>
                        <Divider style={{ backgroundColor: '#b5c4b1', height: 2, marginBottom: 8 }} />
                        <View style={{ flexDirection: 'column', padding: 10, justifyContent: 'flex-start' }}>
                            <Text style={styles.baseText}>
                                <Icon name='ios-information-circle' color='#6b7f94' size={20} />
                            賣場簡介:</Text>
                            <Text style={styles.baseText1}>
                                {seller.marketDesc}
                            </Text>
                        </View>
                        <Divider style={{ backgroundColor: '#b5c4b1', height: 2, marginBottom: 8 }} />
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Text style={styles.baseText}>
                                <Icon name='ios-apps' color='#6b7f94' size={20} />
                            賣場商品分類:</Text>
                        </View>
                        <View style={{ paddingLeft: 18 }}>
                            {types.map((post) => (
                                <Text style={styles.baseText1}><Icon name='ios-caret-forward' color='#8C7599' size={15} />
                                    {post.typeName}</Text>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="setPage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="setPage" component={setPage} />
            <Stack.Screen name="SellerSetEdit" component={SellerSetEdit} />
        </Stack.Navigator>
    );
}
