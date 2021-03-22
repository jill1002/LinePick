import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions, Image } from 'react-native';
import styles from '../styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScrollView from 'react-native-input-scroll-view';
//import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';
//import { Image } from 'react-native-elements';



export default function ProductLaunch() {
    const [inputscroll, setInputscroll] = useState('');
    const [categories, setCategories] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [newtags, setNewtags] = useState('');
    //const renderItem = ({ item, style }) => (
    return (
        <ScrollView horizontal={true}>


            <View style={{ flexWrap: 'wrap', backgroundColor: '#FFFCEC', alignContent: 'stretch' }}>
                <View style={styles.container1}>
                    <View style={[styles.frame, styles.borderStyle, { flexDirection: 'column', padding: 8, backgroundColor: '#FFFFFF', marginLeft: 20 }]}>
                        <Text style={[styles.baseText1, { paddingLeft: 20 }]}>新增商品</Text>
                        {/* <View style={[styles.uploadarea1, {
                    width: 150, height: 150
                    , paddingHorizontal: 45, paddingVertical: 45
                    ,
                }]}> */}
                        <IconButton
                            icon="plus-circle"
                            color='#AE8F00'
                            size={28}
                            onPress={() => console.log('Pressed')}
                            style={{
                                width: 150, height: 150
                                , paddingHorizontal: 45, paddingVertical: 45
                                ,
                            }}
                        />
                        {/* </View> */}
                    </View>
                </View>

                <View style={{ flexDirection: 'row', padding: 8, borderStyle: 'solid', borderColor: '#AE8F00' }}>
                    <View style={[styles.frame, styles.borderStyle, { backgroundColor: '#FFFFFF' }]}>
                        <Text style={[styles.baseText1, { padding: 20 }]}>項鍊</Text>
                        <Image
                            style={{ width: 50, height: 30, marginBottom: 10, marginHorizontal: 60 }}
                            Source={{ uri: 'https://s5.mogucdn.com/mlcdn/c45406/200408_6j299599kl066bf9ie7l1fa47jlh9_640x852.jpg' }}
                        />
                        <Text style={[styles.innerText, { padding: 20 }]}>
                            價格:{"\n"}
                            商品簡介:{"\n"}
                            價錢:{"\n"}
                            賣出數量:{"\n"}
                            狀態:{"\n"}
                        </Text>
                        <TouchableOpacity style={[styles.button, { width: 150 }]}>
                            <Text style={styles.buttonText1}>重新上架商品</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.frame, styles.borderStyle, { backgroundColor: '#FFFFFF' }]}>
                        <Text style={[styles.baseText1, { padding: 20 }]}>背心</Text>
                        <Image
                            style={{ width: 50, height: 30, marginBottom: 10, marginHorizontal: 60 }}
                            Source={{ uri: 'https://s5.mogucdn.com/mlcdn/c45406/200408_6j299599kl066bf9ie7l1fa47jlh9_640x852.jpg' }}
                        />
                        <Text style={[styles.innerText, { padding: 20 }]}>
                            價格:{"\n"}
                            商品簡介:{"\n"}
                            價錢:{"\n"}
                            賣出數量:{"\n"}
                            狀態:{"\n"}
                        </Text>
                        <TouchableOpacity style={[styles.button, { width: 150 }]}>
                            <Text style={styles.buttonText1}>修改商品</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { width: 150 }]}>
                            <Text style={styles.buttonText1}>查看商品庫存</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    );
    // );
}