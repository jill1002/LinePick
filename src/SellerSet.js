import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions } from 'react-native';
import styles from '../styles.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScrollView from 'react-native-input-scroll-view';
import FormInput from './FormInput.js'
//import * as React from 'react';
// test
import { IconButton, Colors } from 'react-native-paper';
//import TagInput from 'react-native-tags-input';
import Tags from "react-native-tags";


export default function SellerSet() {
    const [inputscroll, setInputscroll] = useState('');
    const [categories, setCategories] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [newtags, setNewtags] = useState('');
    //const renderItem = ({ item, style }) => (
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', padding: 8 }}>
                <View style={{ paddingHorizontal: 0 }}>
                    <Text style={styles.baseText}>賣場類型</Text>
                </View>
                <View>
                    <DropDownPicker
                        style={{ marginLeft: 20 }}
                        items={[
                            { label: '服飾', value: 'clothes' },
                            { label: '飾品', value: 'accessories' },
                            { label: '3C', value: '3C' },
                        ]}
                        multiple={true}
                        multipleText="%d items have been selected."//?
                        min={1}
                        max={3}
                        defaultValue={categories}
                        containerStyle={{ height: 40 }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        onChangeItem={item => setCategories(item)}//?
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', padding: 8 }}>
                <View>
                    <Text style={styles.baseText}>賣場簡介</Text>
                </View>
                <View style={[styles.border, { marginLeft: 20 }]}>
                    <SafeAreaView>
                        <ScrollView horizontal={true} style={{ height: 60 }}>
                            <TextInput
                                value={inputscroll}
                                style={styles.innerText}
                                onChangeText={text => setInputscroll(text)}
                                multiline />
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
            <View style={{ flexDirection: 'column', padding: 8 }}>
                <View>
                    <Text style={styles.baseText}>電子信箱</Text>
                </View>
                <View>
                    <FormInput
                        name='email'
                        value={email}
                        placeholder='Enter email'
                        autoCapitalize='none'
                        iconName='ios-mail'
                        iconColor='#2C384A'
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'column', padding: 8 }}>
                <View>
                    <Text style={styles.baseText}>手機號碼</Text>
                </View>
                <View>
                    <FormInput
                        name='cellphone'
                        value={cellphone}
                        placeholder='Enter cellphone number'
                        autoCapitalize='none'
                        iconName='ios-call-outline'
                        iconColor='#2C384A'
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'column', padding: 8 }}>
                <View>
                    <Text style={styles.baseText}>上傳賣場封面</Text>
                </View>
                <View style={[styles.uploadarea, {
                    width: 150, height: 150
                    , paddingHorizontal: 45, paddingVertical: 45
                }]}>
                    <IconButton
                        icon="camera"
                        color='#2C384A'
                        size={28}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'column', padding: 8 }}>
                <View>
                    <Text style={styles.baseText}>商品分類</Text>
                </View>
               <View>
                    <Tags
                        initialTags={["新品"]}
                        textInputProps={{
                            placeholder: "請輸入商品分類"
                        }}
                        initialText="新品"
                        onChangeTags={tags => console.log(tags)}
                        
                        onTagPress={(index, tagLabel, event, deleted) =>
                          console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                        containerStyle={{ justifyContent: "center" }}
                        inputStyle={{ backgroundColor: "white" }}
                    />
                </View>
            </View>
            <TouchableOpacity style={[styles.button, { width: 150 }]}>
                <Text style={styles.buttonText}>建立賣場</Text>
            </TouchableOpacity>
        </View>
    );
    // );
}