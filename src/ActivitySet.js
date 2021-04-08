import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions,Image } from 'react-native';
import styles from '../styles';
import InputScrollView from 'react-native-input-scroll-view';
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function ActivitySet() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepickerStart = () => {
        showMode('date');
    };

    const showTimepickerStart = () => {
        showMode('time');
    };

    const showDatepickerEnd = () => {
        showMode('date');
    };

    const showTimepickerEnd = () => {
        showMode('time');
    };


    return (
        <ScrollView >

            <View style={[styles.container2]}>
                <Text style={[styles.linePick, { flex:1,paddingTop:30,padding: 20 }]}>Line Pick</Text>
            </View>

            <View style={[styles.container1]}>
                <View style={[styles.tipStyle, { flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 10, paddingRight: 80 }]}>
                    <Text style={[styles.baseText1, { padding: 20 }]}>開始時間</Text>
                    <View >
                        <View style={[styles.container1, { paddingTop: 10 }]}>
                            <View style={[styles.borderStyle, styles.block]}>
                                <Button onPress={showDatepickerStart} color='#6b7f94' title="活動開始日期" />
                            </View>
                        </View>
                        <View style={[styles.container1]}>
                            <View style={[styles.borderStyle, styles.block]}>
                                <Button onPress={showTimepickerStart} color='#6b7f94' title="活動開始時間" />
                            </View>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                </View>
            </View>



            <View style={styles.container1}>
                <View style={[styles.tipStyle, { flexDirection: 'row', borderBottomWidth: 2, paddingBottom: 10, paddingRight: 80 }]}>
                    <Text style={[styles.baseText1, { padding: 20 }]}>結束時間</Text>
                    <View >
                        <View style={[styles.container1, { paddingTop: 10 }]}>
                            <View style={[styles.borderStyle, styles.block]}>
                                <Button onPress={showDatepickerEnd} color='#6b7f94' title="活動結束日期" />
                            </View>
                        </View>
                        <View style={[styles.container1]}>
                            <View style={[styles.borderStyle, styles.block]}>
                                <Button onPress={showTimepickerEnd} color='#6b7f94' title="活動結束時間" />
                            </View>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                </View>
            </View>

            <View style={styles.container1}>

                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={[styles.baseText1, { padding: 20 }]}>輸入折數</Text>
                    <TextInput
                        onChangeText={text => setText(text)}
                        style={[styles.block, styles.inputStyle, { margin: 10, padding: 8, flex: 1 }]}
                        maxLength={10}
                    />
                    <Text style={[styles.baseText1, {
                        paddingRight: 50,
                        flex: 1,
                        paddingTop: 20
                    }]}>折</Text>
                </View>
            </View>

            <View style={[styles.container1, { flex: 1 }]}>
                <Text style={[styles.baseText1, { padding: 20 }]}>選擇商品</Text>
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.container1}>
                    <View style={[styles.frame, styles.borderStyle, { backgroundColor: '#FFFFFF' }]}>
                        <Text style={[styles.baseText1, { padding: 20 }]}>項鍊</Text>
                        <Image
                            style={{ width: 50, height: 30, marginBottom: 10, marginHorizontal: 60 }}
                            Source={{ uri: 'https://s5.mogucdn.com/mlcdn/c45406/200408_6j299599kl066bf9ie7l1fa47jlh9_640x852.jpg' }}
                        />
                        <Text
                            style={[styles.innerText, { padding: 20 }]}>
                            價格:{"\n"}
                            商品簡介:{"\n"}
                            價錢:{"\n"}
                            賣出數量:{"\n"}
                            狀態:上架中{"\n"}
                            限購數量:___個{"\n"}
                        </Text>
                        <TouchableOpacity style={[styles.whitebutton, { width: 170 }]}>
                            <Text style={styles.buttonTextAE}>修改商品</Text>
                        </TouchableOpacity>
                        <IconButton
                            icon="delete"
                            color='#6b7f94'
                            size={40}
                            onPress={() => console.log('Pressed')}
                            style={{ marginLeft: 63 }}
                        />

                    </View>

                    <View style={styles.container1}>
                        <View style={[styles.frame, styles.borderStyle, { flexDirection: 'column', padding: 8, backgroundColor: '#FFFFFF' }]}>
                            <Text style={[styles.baseText1, { paddingLeft: 20, paddingTop: 10 }]}>新增商品</Text>
                            {/* <View style={[styles.uploadarea1, {
                    width: 150, height: 150
                    , paddingHorizontal: 45, paddingVertical: 45
                    ,
                }]}> */}
                            <IconButton
                                icon="plus-circle"
                                color='#6b7f94'
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
                </View>
            </ScrollView>
            <View style={[styles.container1, { flexDirection: 'row' }]} >
                <TextInput
                    placeholder="新增折扣"
                    onChangeText={text => setText(text)}
                    style={[, styles.block, styles.borderStyle, { margin: 10, padding: 8, }]}
                    maxLength={30}
                    multiline={false}
                />
            </View>

            <View style={styles.container1}>
                <TouchableOpacity style={[styles.button, { width: 150 }]}>
                    <Text style={styles.buttonText1}>取消修改</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { width: 150 }]}>
                    <Text style={styles.buttonText1}>確認修改</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};