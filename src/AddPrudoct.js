import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions } from 'react-native';
import styles from '../styles';
import DropDownPicker from 'react-native-dropdown-picker';
import InputScrollView from 'react-native-input-scroll-view';
import { IconButton, Colors } from 'react-native-paper';

export default function AddProduct() {
    const [categories, setCategories] = useState('');
    const [text, setText] = useState('');
    return (
        <ScrollView >
            <View style={[styles.container2]}>
                <Text style={[styles.linePick, { flex: 1, paddingTop: 30, padding: 20 }]}>Line Pick</Text>
            </View>
            <View style={styles.container1}>
                <View style={[styles.frame, { marginLeft: 20, borderStyle: 'dashed', borderColor: '#6b7f94', marginTop: 20 }]}>
                    <Text style={[styles.baseText1, {
                        paddingTop:20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }]}>選擇商品圖片</Text>
                    <IconButton
                        icon="plus-circle"
                        color='#6b7f94'
                        size={28}
                        onPress={() => console.log('Pressed')}
                        style={{
                            width: 150, height: 150
                            , paddingHorizontal: 45, paddingVertical: 45
                            , alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }} />
                </View>
            </View>

            <View style={[styles.container1, { flexDirection: 'row', flex: 1 }]}>
                <Text style={[styles.baseText1, { padding: 20 }]}>商品名稱</Text>
                <TextInput
                    placeholder={"請輸入商品名稱!"}
                    onChangeText={text => setText(text)}
                    style={[styles.block, styles.inputStyle, { margin: 10, padding: 8, flex: 1 }]}
                    maxLength={10}
                />
            </View>

            <View style={[styles.container1, { flexDirection: 'row', flex: 1 }]}>
                <Text style={[styles.baseText1, { padding: 20 }]}>商品描述</Text>
                <TextInput
                    placeholder={"請輸入產品描述!"}
                    onChangeText={text => setText(text)}
                    style={[styles.block, { margin: 10, padding: 8, flex: 1 }]}
                    maxLength={50}
                    multiline={true}
                />
            </View>

            <View style={[styles.container1, { flexDirection: 'row' }]}>
                <Text style={[styles.baseText1, { padding: 20 }]}>商品分類</Text>
                <DropDownPicker
                    style={{ marginLeft: 10, alignSelf: 'center', }}
                    items={[
                        { label: '服飾', value: 'clothes' },
                        { label: '飾品', value: 'accessories' },
                        { label: '3C', value: '3C' },
                    ]}
                    multiple={true}
                    multipleText="%d 已經被選取"//選擇的數量
                    min={1}
                    max={3}
                    defaultValue={categories}
                    containerStyle={{ height: 40, width: 150 }}
                    itemStyle={{
                        justifyContent: 'center'
                    }}
                    onChangeItem={item => setCategories(item)}//?
                />
            </View>


            <View style={[styles.container1, { flexDirection: 'column' }]}>
                <Text style={[styles.baseText1, { paddingLeft: 20 }]}>新增規格—</Text>
            </View>

            <View style={[styles.container1, { flexDirection: 'row' }]} >
                <TextInput
                    placeholder="請輸入產品顏色!"
                    onChangeText={text => setText(text)}
                    style={[, styles.block, { margin: 10, padding: 8, }]}
                    maxLength={5}
                    multiline={false}
                />
            </View>

            <Text style={[styles.container1, styles.baseText1, { padding: 20 }]}>尺寸</Text>

            <View style={[styles.container1, { flexDirection: 'row' }]} >
                <TextInput
                    placeholder="請輸入產品尺寸!"
                    onChangeText={text => setText(text)}
                    style={[, styles.block, { margin: 10, padding: 8, }]}
                    maxLength={5}
                    multiline={false}
                />
            </View>
            <View style={styles.container1}>
                <TouchableOpacity style={[styles.button, { width: 250 }]}>
                    <Text style={styles.buttonText1}>下一步：設定商品數量和價格</Text>
                </TouchableOpacity>
            </View>







        </ScrollView>
    )
};