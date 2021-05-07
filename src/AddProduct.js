import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Button } from 'react-native';
import styles from '../styles';
import { Header, Left, Right, Body } from "native-base";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReactChipsInput from 'react-native-chips';
import AddProduct2 from './AddProduct2';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import CheckBox from 'react-native-modest-checkbox'

export default function AddProduct() {

    function AddProduct1({ navigation }) {
        const [productName, setproductName] = useState("");
        const [productDesc, setproductDesc] = useState("");
        const [productType, setProductType] = useState("");
        const [productTypeId, setProductTypeId] = useState("");
        const [checked, setChecked] = useState([true,false,false]); //checkbox
        const chooseType = (index, checked) => {
            console.log("value");
            console.log(types[index].typeName);
            for(var i=0;i<checked.length;i++){
                    checked[i] = false;
                    checked[index] = true;
            }
            setChecked([...checked]);
            setProductType(types[index].typeName);
            console.log("in choosrType after:");
            console.log(types[index].typeId);
            setProductTypeId(types[index].typeId);
    }
        

        const [typeChips, settypeChips] = useState([]);  //chip

        const [types, setTypes] = useState([]); //賣場商品分類
        useEffect(() => {
            async function fetchData() {
                const result = await axios.get('http://0324bb0e2bbc.ngrok.io/Type');
                setTypes(result.data);
                //result.data.forEach((item, index)=>checked[index]=false);
            }
            fetchData();
        }, [checked]);

        return (
            <View style={{ backgroundColor: '#f4f3eb' }}>
                <ScrollView >
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
                            <Text style={{ fontSize: 22, color: "#77773c", fontWeight: 'bold' }}>新增商品</Text>
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
                    <View style={styles.marketBorder2}>
                        <View style={{ margin: 5 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Text style={[styles.baseText, { padding: 20 }]}>
                                    <Icon name='ios-bookmark' color='#6b7f94' size={25} />
                            商品名稱</Text>
                                <View style={styles.textInputStyle}>
                                    <TextInput
                                        placeholder={"請輸入商品名稱"}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor="#8C7599"
                                        value={productName}
                                        onChangeText={text => setproductName(text)}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Text style={[styles.baseText, { padding: 20 }]}>
                                    <Icon name='ios-information-circle' color='#6b7f94' size={25} />
                            商品描述</Text>
                                <View style={styles.textInputStyleLarge}>
                                    <TextInput
                                        placeholder={"請輸入商品描述"}
                                        underlineColorAndroid="transparent"
                                        placeholderTextColor="#8C7599"
                                        value={productDesc}
                                        onChangeText={text => setproductDesc(text)}
                                        style={{ margin: 10, padding: 10 }}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                <Text style={[styles.baseText, { padding: 20 }]}>
                                    <Icon name='ios-apps' color='#6b7f94' size={25} />
                            選擇商品分類</Text>
                                {types.map((type, index) => (
                                    <View style={{
                                        flexDirection: "row",
                                        marginBottom: 20,
                                        marginLeft: 22,
                                    }}>
                                        <CheckBox
                                            checkedComponent={<Icon name="ios-checkmark-circle" size={25} color="#222" />}
                                            uncheckedComponent={<Icon name="ios-ellipse-outline" size={25} color="#222" />}
                                            label={type.typeName}
                                            defaultChecked={false}
                                            checked = {checked[index]}
                                            value={type.typeName}
                                            onChange={() => chooseType(index, checked)}
                                        />
                                    </View>
                                ))} 
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 15 }}>
                                <Text style={[styles.baseText, { paddingLeft: 20 }]}>
                                    <Icon name='ios-create' color='#6b7f94' size={25} />
                            新增商品規格</Text>
                            </View>
                            <View style={{ paddingLeft: 18 }}>
                                < ReactChipsInput
                                    label="請輸入商品規格"
                                    initialChips={typeChips}
                                    onChangeChips={(chips) => settypeChips(chips)}
                                    alertRequired={true}
                                    chipStyle={{ borderColor: '#f9e7d2', backgroundColor: '#f9e7d2' }}
                                    inputStyle={{ fontSize: 10 }}
                                    labelStyle={{ color: '#8C7599', fontSize: 15 }}
                                    labelOnBlur={{ color: '#666' }} />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <TouchableOpacity style={[styles.button, { width: 110 }]} onPress={() => navigation.navigate("AddProduct2", { productName: productName, productDesc: productDesc, productType:productType,productTypeId:productTypeId, productStyle: typeChips })}>
                                    <Text style={styles.buttonText1}>下一步
                                <Icon name='ios-chevron-forward' color='#FFFFFF' size={18} />
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    };
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="AddProduct1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AddProduct1" component={AddProduct1} />
            <Stack.Screen name="AddProduct2" component={AddProduct2} />
        </Stack.Navigator>
    );
};

