import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions, Image } from 'react-native';
import styles from '../styles';
import DropDownPicker from 'react-native-dropdown-picker';
import InputScrollView from 'react-native-input-scroll-view';
import { IconButton, Colors } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';



export default function ProductLaunch() {
    const [inputscroll, setInputscroll] = useState('');
    const [categories, setCategories] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [newtags, setNewtags] = useState('');
    //const renderItem = ({ item, style }) => (
    return (


        <View style={{ backgroundColor: '#c8d3c5', flex: 1 }}>
            <ScrollView>
                <View style={[styles.container2]}>
                    <Text style={[styles.linePick, { flex: 1, paddingTop: 30, padding: 20 }]}>Line Pick</Text>
                </View>


                {/* <View style={{ flexWrap: 'wrap', alignContent: 'stretch', flex: 1 }}> */}

                {/* <View style={{ flexDirection: 'row', padding: 8, borderStyle: 'solid', borderColor: '#c8d3c5', flex: 1,backgroundColor:'blue' }}> */}

                <View style={[styles.frame, styles.borderStyle, { backgroundColor: '#FFFFFF', flex: 1 }]}>
                    <Text style={[styles.baseText1, { padding: 20 }]}>項鍊</Text>
                    <View style={{ flexDirection: 'row' }}>
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
                    </View>
                    <TouchableOpacity style={[styles.button, { width: 140 }]}>
                        <Text style={styles.buttonText1}>重新上架商品</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.frame, styles.borderStyle, { backgroundColor: '#FFFFFF', flex: 1 }]}>
                    <Text style={[styles.baseText1, { padding: 20 }]}>背心</Text>
                    <View style={{ flexDirection: 'row' }}>
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
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={[styles.button, { width: 140 }]}>
                            <Text style={styles.buttonText1}>修改商品</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { width: 140 }]}>
                            <Text style={styles.buttonText1}>查看商品庫存</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* </View> */}
                {/* </View> */}
            </ScrollView>
        </View>


    );

}