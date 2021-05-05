import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Button, Dimensions } from 'react-native';
import styles from '../styles';
import { Header, Left, Right, Body } from "native-base";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Checkbox, Appbar, Title } from 'react-native-paper';
import ReactChipsInput from 'react-native-chips';
import SetProductNext from './SetProductNext';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function SetProduct({ route }) {
    const productName = route.params.productName;
    const productDesc = route.params.productDesc;
    const [productNameEnd, setproductName] = useState(productName);
    const [productDescEnd, setproductDesc] = useState(productDesc);

    const [productStyles, setProductStyles] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('http://42c21ae11ac0.ngrok.io/ProductsInfo/' + productName);
            setProductStyles(result.data);
        }
        fetchData();
    }, []);

    const [types, setTypes] = useState([]); //賣場商品分類
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('http://42c21ae11ac0.ngrok.io/Type');
            setTypes(result.data);
        }
        fetchData();
    }, []);

    function AddProduct1({ navigation }) {
        // const [value, setValue] = useState(''); 
        // const onChange = (value) => {
        //     setValue(value);
        // };
        // //const data={types.map((type) => ({type.typeName} ))};
        const [checked, setChecked] = React.useState(false); //下拉選單的

        return (
            <View style={{ backgroundColor: '#f4f3eb' }}>
                <Appbar.Header
                    style={{ backgroundColor: '#f9e7d2' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Text style={styles.baseText}>修改商品</Text>
                </Appbar.Header>
                <ScrollView >
                    <View style={styles.marketBorder2}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={[styles.baseText1, { padding: 20 }]}>
                                <Icon name='ios-bookmark' color='#6b7f94' size={25} />
                            商品名稱</Text>
                            <View style={[styles.textInputStyle, { margin: 20 }]}>
                                <TextInput
                                    placeholder={productName}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="#8C7599"
                                    style={{ margin: 10 }}
                                    value={productNameEnd}
                                    onChangeText={value => setproductName(value)}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Text style={[styles.baseText1, { padding: 20 }]}>
                                <Icon name='ios-information-circle' color='#6b7f94' size={25} />
                            商品描述</Text>
                            <View style={styles.textInputStyleLarge}>
                                <TextInput
                                    placeholder={productDesc}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="#8C7599"
                                    style={{ margin: 10, padding: 10 }}
                                    value={productDescEnd}
                                    onChangeText={value => setproductDesc(value)}
                                    multiline='true'
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Text style={[styles.baseText1, { padding: 20 }]}>
                                <Icon name='ios-apps' color='#6b7f94' size={25} />
                            商品分類</Text>
                            {/* <Dropdown
                                label="選擇商品分類"
                                labelStyle={{ color: '#8C7599' }}
                                data={data}
                                value={value}
                                onChange={onChange}
                            /> */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                {types.map((type) => (
                                    // <CheckBox
                                    //     center
                                    //     title={type.typeName}
                                    //     checkedIcon='dot-circle-o'
                                    //     uncheckedIcon='circle-o'
                                    //     //checked={}
                                    // />

                                    <Checkbox
                                    title={type.typeName}
                                        color="#6b7f94"
                                        status={checked ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}
                                    />
                                ))}
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 25 }}>
                            <Text style={[styles.baseText1, { paddingLeft: 20 }]}>
                                <Icon name='ios-create' color='#6b7f94' size={25} />
                            修改商品規格</Text>
                        </View>
                        <View style={{ paddingLeft: 23 }}>
                            < ReactChipsInput
                                label="請輸入商品規格" initialChips={productStyles.map((styles) => (
                                    [styles.productStyle]
                                ))}
                                onChangeChips={(chips) => console.log(chips)}
                                alertRequired={true}
                                chipStyle={{ borderColor: '#f9e7d2', backgroundColor: '#f9e7d2' }}
                                inputStyle={{ fontSize: 10 }}
                                labelStyle={{ color: '#8C7599', fontSize: 15 }}
                                labelOnBlur={{ color: '#666' }} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity style={[styles.button, { width: 110 }]} onPress={() => navigation.navigate("SetProductNext", {productStyles: productStyles})}>
                                <Text style={styles.buttonText1}>下一步
                                <Icon name='ios-chevron-forward' color='#FFFFFF' size={18} />
                                </Text>
                            </TouchableOpacity>
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
            <Stack.Screen name="SetProductNext" component={SetProductNext} />
        </Stack.Navigator>
    );
};

