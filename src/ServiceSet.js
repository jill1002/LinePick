import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Button, Dimensions,TextInput} from 'react-native';
import styles from '../styles.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import InputScrollView from 'react-native-input-scroll-view';
import FormInput from './FormInput.js'
//import * as React from 'react';
import { IconButton, Colors, Appbar, Title} from 'react-native-paper';
//import TagInput from 'react-native-tags-input';
import Tags from "react-native-tags";
import { color } from 'react-native-reanimated';


export default function ServiceSet({ }) {
    const [text, setText] = useState('');
    return (

        <View style={[styles.container]}>
            <ScrollView>
                <View style={{ backgroundColor: '#f9e7d2', marginTop: 20 }}>
                    <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={styles.baseText}>範例:</Text>
                    </View>
                </View>

                <View style={{ marginVertical: 10}}>
                    <View style={{ alignItems: 'center', justifyContent: "center", paddingHorizontal: 25 }}>
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <View style={[styles.textarea, { flexDirection: 'column', width: '100%', paddingVertical: 10 }]}>

                                <View style={{ flex: 1, marginBottom: 10 }}>
                                    <Text style={styles.baseText}>Q:到貨時間</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.baseText}>A:現貨商品將於3日內出貨</Text>
                                </View>


                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: "center", paddingHorizontal: 25 }}>
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <View style={[styles.textarea, { flexDirection: 'column', width: '100%', paddingVertical: 10 }]}>

                                <View style={{flex:1,marginBottom: 10, flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.baseText}>Q:</Text>
                                    </View>
                                    <TextInput
                                        style={{ flex: 1 }}
                                        onChangeText={setText}
                                        value={text}
                                        multiline={true}
                                        placeholder={'請輸入10字以內問題。'}
                                    />
                                </View>
                                <View style={{flex:1,marginBottom: 10, flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.baseText}>A:</Text>
                                    </View>
                                    <TextInput
                                        style={{ flex: 1 }}
                                        onChangeText={setText}
                                        value={text}
                                        multiline={true}
                                        placeholder={'請輸入回覆訊息。'}
                                    />
                                </View>


                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[styles.button, { width: 150}]}>
                    <Text style={styles.buttonText}>儲存</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>

    );
}