import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Button, Dimensions, TextInput, Image } from 'react-native';
import styles from '../styles.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import InputScrollView from 'react-native-input-scroll-view';
import FormInput from './FormInput.js'
//import * as React from 'react';
import { IconButton, Colors, Appbar, Title, Searchbar } from 'react-native-paper';
//import TagInput from 'react-native-tags-input';
import Tags from "react-native-tags";
import { color } from 'react-native-reanimated';
//import ImageView from 'react-native-image-view';


export default function CheckOrders({ }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (

        <View style={[styles.container]}>
            <ScrollView>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <View style={[styles.orderscheckStyle, { marginBottom: 0 }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>訂單編號:hiceline</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0, flexDirection: 'column' }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>第一項產品名:</Text>
                                <Image
                                    style={{ width: 50, height: 70, marginBottom: 20, marginHorizontal: 60 }}
                                    source={{ uri: 'https://s5.mogucdn.com/mlcdn/c45406/200408_6j299599kl066bf9ie7l1fa47jlh9_640x852.jpg' }}
                                />
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0 }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>狀態：</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0, borderBottomWidth: 2 }]}>
                                {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                                <TouchableOpacity style={[styles.button, { marginHorizontal: 20 }]}>
                                    <Text style={styles.buttonText}>查看</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <View style={[styles.orderscheckStyle, { marginBottom: 0 }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>訂單編號:hiceline</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0, flexDirection: 'column' }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>第一項產品名:</Text>
                                <Image
                                    style={{ width: 50, height: 70, marginBottom: 20, marginHorizontal: 60 }}
                                    source={{ uri: 'https://s5.mogucdn.com/mlcdn/c45406/200408_6j299599kl066bf9ie7l1fa47jlh9_640x852.jpg' }}
                                />
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0 }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>狀態：</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0, borderBottomWidth: 2 }]}>
                                {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                                <TouchableOpacity style={[styles.button, { marginHorizontal: 20 }]}>
                                    <Text style={styles.buttonText}>查看</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* 第二排開始*/}
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <View style={[styles.orderscheckStyle, { marginBottom: 0 }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>訂單編號:yovicky</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0, flexDirection: 'column' }]}>
                                <Text style={[styles.innerText]}>購買人姓名:</Text>
                                <Text style={[styles.innerText]}>購買人手機:</Text>
                                <Text style={[styles.innerText]}>購買人Email:</Text>
                                <Text style={[styles.innerText]}>送達地址:</Text>
                                <Text style={[styles.innerText]}>選擇付款方式:</Text>
                                <Text style={[styles.innerText]}>購買商品:</Text>
                                <Text style={[styles.innerText]}>應付:</Text>
                                <Text style={[styles.innerText]}>付款狀態:</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0 }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>狀態：備貨中</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0, borderBottomWidth: 2 }]}>
                                {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                                <TouchableOpacity style={[styles.multibuttons, { marginHorizontal: 20 }]}>
                                    <Text style={styles.buttonText}>出貨</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.multibuttons, { marginHorizontal: 20 }]}>
                                    <Text style={styles.buttonText}>收起</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <View style={[styles.orderscheckStyle, { marginBottom: 0 }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>訂單編號:yovicky</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0, flexDirection: 'column' }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>第一項產品名:</Text>
                                <Image
                                    style={{ width: 50, height: 70, marginBottom: 20, marginHorizontal: 60 }}
                                    source={{ uri: 'https://www.crudo-leather.com/site/assets/files/7046190/rosegold_2-1-1.746x0.webp' }}
                                />
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0 }]}>
                                <Text style={[styles.innerText, { padding: 20 }]}>狀態：</Text>
                            </View>
                            <View style={[styles.orderscheckStyle, { marginTop: 0, marginBottom: 0, borderBottomWidth: 2 }]}>
                                {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                                <TouchableOpacity style={[styles.button, { marginHorizontal: 20 }]}>
                                    <Text style={styles.buttonText}>查看</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}