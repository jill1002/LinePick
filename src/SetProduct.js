import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Button, Dimensions } from 'react-native';
import styles from '../styles';
import { Header, Left, Right, Body } from "native-base";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton, Colors, Appbar, Title } from 'react-native-paper';
import ReactChipsInput from 'react-native-chips';
import InputScrollView from 'react-native-input-scroll-view';
import AddProduct2 from './AddProduct2';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

export const data = [
    {
        value: "1",
        label: '零食',
    },
    {
        value: "2",
        label: '生活雜貨',
    },
    {
        value: "3",
        label: '美妝保養',
    },
];

export default function SetProduct() {

    function AddProduct1({ navigation }) {
        const [categories, setCategories] = useState('');
        const [text, setText] = useState('');
        const [value, setValue] = useState(''); //下拉選單的
        const onChange = (value) => {
            setValue(value);
        };

        let openImagePickerAsync = async () => {
            let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
            if (permissionResult.granted === false) {
                alert("Permission to access camera roll is required!");
                return;
            }
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
            console.log(pickerResult);
        }

        return (
            <View style={styles.container}>
                <Appbar.Header
                    style={{ backgroundColor: '#f9e7d2' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Text style={styles.baseText}>修改商品</Text>
                </Appbar.Header>
                <ScrollView >
                    <View style={{ margin: 20, paddingTop: 10 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Text style={[styles.baseText1, { paddingLeft: 20 }]}>
                                <Icon name='ios-image' color='#6b7f94' size={25} />
                            商品圖片</Text>
                            <View style={{ flexDirection: 'row', marginBottom: 8, justifyContent: 'flex-end' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <IconButton
                                        icon="plus-circle"
                                        color='#8C7599'
                                        size={28}
                                        onPress={openImagePickerAsync} title='選擇檔案'
                                    />
                                </View>
                                <View style={[styles.uploadarea, {
                                    width: 150, height: 150
                                    , paddingHorizontal: 45, paddingVertical: 45
                                }]}>
                                    <Image
                                        style={{ width: "200%", height: "200%", bottom: 25, alignSelf: 'center' }}
                                        source={require('../assets/linepick.jpg')}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={[styles.baseText1, { padding: 20 }]}>
                                <Icon name='ios-bookmark' color='#6b7f94' size={25} />
                            商品名稱</Text>
                            <View style={styles.textInputStyleSign}>
                                <TextInput
                                    placeholder={"請輸入商品名稱"}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="#8C7599"
                                    onChangeText={text => setText(text)}
                                    style={{ margin: 10, padding: 10 }}
                                    maxLength={10}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={[styles.baseText1, { padding: 20 }]}>
                                <Icon name='ios-information-circle' color='#6b7f94' size={25} />
                            商品描述</Text>
                            <View style={styles.textInputStyleLarge}>
                                <TextInput
                                    placeholder={"請輸入產品描述"}
                                    underlineColorAndroid="transparent"
                                    placeholderTextColor="#8C7599"
                                    onChangeText={text => setText(text)}
                                    style={{ margin: 10, padding: 10 }}
                                    multiline='true'
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={[styles.baseText1, { padding: 20 }]}>
                                <Icon name='ios-apps' color='#6b7f94' size={25} />
                            商品分類</Text>
                            <Dropdown
                                label="選擇商品分類"
                                labelStyle={{ color: '#8C7599' }}
                                data={data}
                                value={value}
                                onChange={onChange}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 15 }}>
                            <Text style={[styles.baseText1, { paddingLeft: 20 }]}>
                                <Icon name='ios-create' color='#6b7f94' size={25} />
                            修改商品規格</Text>
                        </View>
                        <View style={{ paddingLeft: 18 }}>
                            < ReactChipsInput
                                label="請輸入商品規格" initialChips={["黑巧克力(24入)", "白巧克力(24入)"]}
                                onChangeChips={(chips) => console.log(chips)}
                                alertRequired={true}
                                chipStyle={{ borderColor: '#f9e7d2', backgroundColor: '#f9e7d2' }}
                                inputStyle={{ fontSize: 10 }}
                                labelStyle={{ color: '#8C7599', fontSize: 15 }}
                                labelOnBlur={{ color: '#666' }} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TouchableOpacity style={[styles.button, { width: 110 }]} onPress={() => navigation.navigate("AddProduct2")}>
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
            <Stack.Screen name="AddProduct2" component={AddProduct2} />
        </Stack.Navigator>
    );
};

