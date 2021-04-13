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


export default function AddProduct2({ }) {
    const _goBack = () => console.log('Went back');
    const [text, setText] = useState('');
    return (
        
            <View style={[styles.container]}>
<ScrollView>
                <Appbar.Header
                    style={{ backgroundColor: 'transparent' }}>
                    <Appbar.BackAction onPress={_goBack} />
                    <Text style={styles.baseText}>設定庫存和價格-</Text>
                </Appbar.Header>

                <View style={{ backgroundColor: '#f9e7d2' ,height:45,alignContent:'center',justifyContent:'center'}}>
                    <View style={{ width: '100%', flexDirection: 'row'}}>
                        <View style={{ height: '100%', width: "25%", alignItems: 'center', justifyContent: "center" }}>
                            <Text style={styles.baseText}>規格</Text>
                        </View>
                        <View style={{ height: '100%', width: "25%", alignItems: 'center', justifyContent: "center" }}>
                            <Text style={styles.baseText}>價格</Text>
                        </View>
                        <View style={{ height: '100%', width: "25%", alignItems: 'center', justifyContent: "center" }}>
                            <Text style={styles.baseText}>商品數量</Text>
                        </View>
                        <View style={{ height: '100%', width: "25%", alignItems: 'center', justifyContent: "center" }}>
                            <Text style={styles.baseText}>商品編號</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: "center"}}>
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <View style={{ flex: 1, alignItems: 'center', width: '25%' }}>
                                <Text style={styles.baseText}>黑色</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' ,justifyContent:'center',paddingTop:'5%'}}>
                                <View style={{ flex: 1, alignItems: 'center',justifyContent:'center' }}>
                                    <Text style={styles.baseText}>L</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{borderColor: "gray", borderWidth: 2, marginHorizontal: 10,textAlign:'center',backgroundColor:'#FFFFFF'}} placeholder="Price"
                        
                                        underlineColorAndroid="transparent" />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 10,textAlign:'center',backgroundColor:'#FFFFFF'}} placeholder="Quantity"
                                        // Making the Under line Transparent.
                                        underlineColorAndroid="transparent" />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 10,textAlign:'center',backgroundColor:'#FFFFFF' }} placeholder="Number"
                                        // Making the Under line Transparent.
                                        underlineColorAndroid="transparent" />
                                </View>


                            </View>

                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center',paddingTop:'5%'}}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={styles.baseText}>M</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 10,textAlign:'center' ,backgroundColor:'#FFFFFF'}} placeholder="Price"
                                        // Making the Under line Transparent.
                                        underlineColorAndroid="transparent" />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 10 ,textAlign:'center',backgroundColor:'#FFFFFF'}} placeholder="Quantity"
                                        // Making the Under line Transparent.
                                        underlineColorAndroid="transparent" />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 10 ,textAlign:'center',backgroundColor:'#FFFFFF'}} placeholder="Number"
                                        // Making the Under line Transparent.
                                        underlineColorAndroid="transparent" />
                                </View>


                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' ,paddingTop:'5%'}}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Text style={styles.baseText}>S</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{borderColor: "gray", borderWidth: 2, marginHorizontal: 10 ,textAlign:'center',backgroundColor:'#FFFFFF'}} placeholder="Price"
                                        // Making the Under line Transparent.
                                        underlineColorAndroid="transparent" />
                                </View>
                                <View style={{ flex: 1}}>
                                    <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 10 ,textAlign:'center',backgroundColor:'#FFFFFF'}} placeholder="Quantity"
                                        // Making the Under line Transparent.
                                        underlineColorAndroid="transparent" />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{ borderColor: "gray", borderWidth: 2, marginHorizontal: 10 ,textAlign:'center',backgroundColor:'#FFFFFF'}} placeholder="Number"
                                        // Making the Under line Transparent.
                                        underlineColorAndroid="transparent" />
                                </View>


                            </View>
                        </View>


                    </View>

                </View>
                
                <TouchableOpacity style={[styles.button, { width: 150}]}>
                    <Text style={styles.buttonText}>上架</Text>
                </TouchableOpacity>
                
                </ScrollView>
            </View>
        
    );
}