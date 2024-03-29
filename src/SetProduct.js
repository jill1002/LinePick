import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Button, Dimensions } from 'react-native';
import styles from '../styles';
import { Header, Left, Right, Body } from "native-base";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Title } from 'react-native-paper';
import ReactChipsInput from 'react-native-chips';
import SetProduct2 from './SetProduct2';
import CheckBox from 'react-native-modest-checkbox'
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


export default function SetProduct({ route }) {
    const productName = route.params.productName;
    const productDesc = route.params.productDesc;

    function SetProduct1({ navigation }) {
        const [types, setTypes] = useState([]); //賣場商品分類

        const [productStyles, setProductStyles] = useState([]);
        const [oneProduct, setOneProduct] = useState("");
        const [productTypeSelect, setProductTypeSelect] = useState("");

        useEffect(() => {
            async function fetchData() {
                const result = await axios.get('http://a8324ec7c82c.ngrok.io/ProductsInfo/' + productName);
                setProductStyles(result.data);
                const one = await axios.get('http://a8324ec7c82c.ngrok.io/ProductsInfo/' + productName);
                setOneProduct(one.data[0]);
                // const productType = await axios.get('http://41d4417b19ff.ngrok.io/ProductType/' + productStyles[0].productId);
                // setProductType(productType.data);
                const type = await axios.get('http://a8324ec7c82c.ngrok.io/Type');
                setTypes(type.data);
                type.data.forEach((item, index) => checked[index] = false);
                const productTypes = await axios.get('http://a8324ec7c82c.ngrok.io/productTypeIdByName/' + productName);
                console.log("check!");
                console.log(productTypes.data);
                setProductTypeSelect(productTypes.data);
            }
            fetchData();
        }, []);

        //const [productType, setProductType] = useState("");
        const [productTypeId, setProductTypeId] = useState(1);
        const [checked, setChecked] = useState([true, false, false]); //checkbox
        const chooseType = (index, checked) => {
            console.log("value");
            console.log(types[index].typeName);
            for (var i = 0; i < checked.length; i++) {
                checked[i] = false;
                checked[index] = true;
            }
            setChecked([...checked]);
            //setProductType(types[index].typeName);
            console.log("in choosrType after:");
            console.log(types[index].typeId);
            setProductTypeId(types[index].typeId);
        }

        var [typeChips, setTypeChips] = useState([]);  // productStyle chip
        var checkChip = 0;
        if (checkChip == 0) {
            typeChips = productStyles.map((post) => ([post.productStyle]))
            checkChip += 1;
        };

        function edit() {
            if (productStyles != [""]) {
                try {
                    for (var i = 0; i < productStyles.length; i++) {
                        console.log(productStyles[i].productStyle);
                        var product_id = productStyles[i].productId;
                        const productNameDesc = {
                            productId: productStyles[i].productId,
                            productName: oneProduct.productName,
                            productDesc: oneProduct.productDesc,
                            productPrice: productStyles[i].productPrice,
                            productStock: productStyles[i].productStock,
                            productPhoto: productStyles[i].productPhoto,
                            productStyle: productStyles[i].productStyle,
                        };
                        axios.put("http://a8324ec7c82c.ngrok.io/ProductEdit/", productNameDesc)
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                            });
                        }
                        for (var i = 0; i < productStyles.length; i++) {
                        const productTypeUpdate = {
                            productTypeId: productTypeSelect[i].productTypeId,
                            productId: productStyles[i].productId,
                            typeId: productTypeId,
                        }
                        console.log("go to productTypeUpdate");
                        axios.put("http://a8324ec7c82c.ngrok.io/ProductTypeEdit/", productTypeUpdate)
                            .then(res => {
                                console.log("in productTypeUpdate");
                                console.log(res);
                                console.log(res.data);
                            });
                    }

                    console.log(typeChips.map((post) => ("newChips" + post)));
                    for (var i = 0; i < typeChips.length; i++) { //找出新增的chip
                        if (i == typeChips.length - 1) {
                            let typeChipsStr = typeChips[i].join();
                            console.log("typeChipsStr" + typeChipsStr);
                            var styleChips = typeChipsStr.split(',');
                            console.log(styleChips);
                        }
                    }

                    var productStylesLength = productStyles.length; //判斷要新增還是刪除
                    var styleChipsLength = styleChips.length;
                    console.log("productStylesLength" + productStylesLength);
                    console.log("styleChipsLength" + styleChipsLength);
                    if (productStylesLength < styleChipsLength) {

                        for (var i = 0; i < productStyles.length; i++) {  //新增
                            for (var j = 0; j < styleChips.length; j++) {
                                if (styleChips[j] == productStyles[i].productStyle) {
                                    console.log("i:" + productStyles[i].productStyle);
                                    console.log("j:" + styleChips[j]);
                                    console.log("already inside");
                                } else if (styleChips[j] != productStyles[i].productStyle && j == styleChips.length - 1 && i == productStyles.length - 1) {
                                    // console.log("i:" + productStyles[i].productStyle);
                                    // console.log("j:" + styleChips[j]);
                                    console.log(styleChips[j] + "not in");
                                    const newStyles = {
                                        productName: "" + oneProduct.productName,
                                        productDesc: "" + oneProduct.productDesc,
                                        productStyle: "" + styleChips[j],
                                    };
                                    axios.post("http://a8324ec7c82c.ngrok.io/ProductAddPost/", newStyles)
                                        .then(res => {
                                            console.log(res);
                                            console.log(res.data);
                                            const productType = {
                                                productId: res.data,
                                                typeId: productTypeId
                                            }
                                            axios.post("http://a8324ec7c82c.ngrok.io/ProductTypeAddPost/", productType)
                                                .then(res => {
                                                    console.log(res);
                                                    console.log(res.data);
                                                });
                                        });

                                }
                            };
                        };
                    } else if (styleChipsLength < productStylesLength) {
                        for (var i = 0; i < productStyles.length; i++) {  //刪除
                            for (var j = 0; j < styleChips.length; j++) {
                                if (styleChips[j] == productStyles[i].productStyle) {
                                    console.log("i:" + productStyles[i].productStyle);
                                    console.log("j:" + styleChips[j]);
                                    console.log("not delete");
                                } else if (styleChips[j] != productStyles[i].productStyle && j == styleChips.length - 1 && i == productStyles.length - 1) {
                                    // console.log("i:" + productStyles[i].productStyle);
                                    // console.log("j:" + typeChips[j]);
                                    console.log(productStyles[i].productStyle + "delete");
                                    axios.delete("http://a8324ec7c82c.ngrok.io/ProductStyleDelete/" + productStyles[i].productStyle)
                                        .then(res => {
                                            console.log(res);
                                            console.log(res.data);
                                        });
                                }
                            };
                        };
                    }
                    navigation.navigate("SetProduct2", { productName: productName });
                } catch { }
            }
        }

        return (
            <View style={{ backgroundColor: '#f4f3eb' }}>
                <ScrollView >
                    <Appbar.Header
                        style={{ backgroundColor: '#f9e7d2' }}>
                        <Appbar.BackAction onPress={() => navigation.goBack()} />
                        <Text style={styles.baseText}>修改商品</Text>
                    </Appbar.Header>
                    <View style={styles.marketBorder2}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={[styles.baseText, { padding: 20 }]}>
                                <Icon name='ios-bookmark' color='#6b7f94' size={25} />
                            商品名稱</Text>
                            <View style={[styles.textInputStyle, { margin: 20 }]}>
                                <TextInput
                                    placeholder={oneProduct.productName}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="#8C7599"
                                    style={{ margin: 10 }}
                                    value={oneProduct.productName}
                                    onChangeText={text => setOneProduct({ ...oneProduct, productName: text })}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Text style={[styles.baseText, { padding: 20 }]}>
                                <Icon name='ios-information-circle' color='#6b7f94' size={25} />
                            商品描述</Text>
                            <View style={styles.textInputStyleLarge}>
                                <TextInput
                                    placeholder={oneProduct.productDesc}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="#8C7599"
                                    style={{ margin: 10, padding: 10 }}
                                    value={oneProduct.productDesc}
                                    onChangeText={text => setOneProduct({ ...oneProduct, productDesc: text })}
                                    multiline={true}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Text style={[styles.baseText, { padding: 20 }]}>
                                <Icon name='ios-apps' color='#6b7f94' size={25} />
                            修改商品分類</Text>
                            {types.map((type, index) => (
                                <View style={{
                                    flexDirection: "row",
                                    marginBottom: 20,
                                    marginLeft: 30
                                }}>
                                    <CheckBox
                                        checkedComponent={<Icon name="ios-checkmark-circle" size={25} color="#222" />}
                                        uncheckedComponent={<Icon name="ios-ellipse-outline" size={25} color="#222" />}
                                        label={type.typeName}
                                        defaultChecked={false}
                                        checked={checked[index]}
                                        value={type.typeName}
                                        onChange={() => chooseType(index, checked)}
                                    />
                                </View>
                            ))}
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 25 }}>
                            <Text style={[styles.baseText, { paddingLeft: 20 }]}>
                                <Icon name='ios-create' color='#6b7f94' size={25} />
                            修改商品規格</Text>
                        </View>
                        <View style={{ paddingLeft: 23 }}>
                            < ReactChipsInput
                                label="請輸入商品規格"
                                initialChips={typeChips}
                                onChangeChips={(chips) => typeChips.push(chips)}
                                alertRequired={true}
                                chipStyle={{ borderColor: '#f9e7d2', backgroundColor: '#f9e7d2' }}
                                inputStyle={{ fontSize: 10 }}
                                labelStyle={{ color: '#8C7599', fontSize: 15 }}
                                labelOnBlur={{ color: '#666' }} />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity style={[styles.button, { width: 110 }]} onPress={edit}>
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
        <Stack.Navigator initialRouteName="SetProduct1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SetProduct1" component={SetProduct1} />
            <Stack.Screen name="SetProduct2" component={SetProduct2} />
        </Stack.Navigator>
    );
};

