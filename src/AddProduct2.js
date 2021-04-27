import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions } from 'react-native';
import styles from '../styles.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import InputScrollView from 'react-native-input-scroll-view';
import FormInput from './FormInput.js'
//import * as React from 'react';
import { IconButton, Colors, Appbar, Title } from 'react-native-paper';
//import TagInput from 'react-native-tags-input';
import Tags from "react-native-tags";
import { color } from 'react-native-reanimated';


export default function AddProduct2({ navigation }) {
    const [text, setText] = useState('');
    return (
        <View style={[styles.container]}>
            <ScrollView>
                <Appbar.Header
                    style={{ backgroundColor: '#f9e7d2' }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Text style={styles.baseText}>設定價格與庫存</Text>
                </Appbar.Header>
                <View style={styles.marketBorder}>
                    <View style={{ backgroundColor: '#f9e7d2', height: 45, alignContent: 'center', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 30, }}>
                        <View style={{ height: '100%', width: "25%", alignItems: 'center', justifyContent: "center" }}>
                            <Text style={styles.baseText}>規格</Text>
                        </View>
                        <View style={{ height: '100%', width: "25%", alignItems: 'center', justifyContent: "center" }}>
                            <Text style={styles.baseText}>價格</Text>
                        </View>
                        <View style={{ height: '100%', width: "25%", alignItems: 'center', justifyContent: "center" }}>
                            <Text style={styles.baseText}>庫存</Text>
                        </View>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <View style={{alignContent: 'center', flexDirection: 'row', justifyContent: 'space-around',paddingBottom:5 }}>
                            <View style={{ width: '100%', alignItems: 'flex-start' }}>
                                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: '5%' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={styles.baseText}>黑巧克力(24入)</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 8, textAlign: 'center', backgroundColor: '#FFFFFF' }} placeholder="Price"
                                            underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 8, textAlign: 'center', backgroundColor: '#FFFFFF' }} placeholder="Quantity"
                                            underlineColorAndroid="transparent" />
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', paddingTop: '5%' }}>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Text style={styles.baseText}>白巧克力(24入)</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 8, textAlign: 'center', backgroundColor: '#FFFFFF' }} placeholder="Price"
                                            // Making the Under line Transparent.
                                            underlineColorAndroid="transparent" />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 8, textAlign: 'center', backgroundColor: '#FFFFFF' }} placeholder="Quantity"
                                            // Making the Under line Transparent.
                                            underlineColorAndroid="transparent" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.button, { width: 150 }]}>
                        <Text style={{color: '#ffff', fontWeight:'bold', fontSize: 15}}>上架</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}