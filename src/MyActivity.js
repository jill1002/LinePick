import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions } from 'react-native';
import styles from '../styles';
import InputScrollView from 'react-native-input-scroll-view';

export default function MyActivity() {


    return (
        <View style={styles.container1}>
            <ScrollView >

                <View style={[styles.container2]}>
                    <Text style={[styles.linePick, { flex: 1, paddingTop: 30, padding: 20 }]}>Line Pick</Text>
                </View>

                <View style={ { flex:1 }}>
                    <View style={[styles.tipStyle, { marginBottom: 0,backgroundColor:'#FFFFFF' }]}>
                        <Text style={[styles.innerText, { padding: 20 }]}>活動名稱：新品限時三天95折</Text>
                    </View>
                    <View style={[styles.tipStyle, { marginTop: 0, marginBottom: 0,backgroundColor:'#FFFFFF' }]}>
                        <Text style={[styles.innerText, { padding: 20 }]}>開始時間：</Text>
                    </View>
                    <View style={[styles.tipStyle, { marginTop: 0, marginBottom: 0,backgroundColor:'#FFFFFF' }]}>
                        <Text style={[styles.innerText, { padding: 20 }]}>結束時間：</Text>
                    </View>
                    <View style={[styles.tipStyle, { marginTop: 0, marginBottom: 0, borderBottomWidth: 2,backgroundColor:'#FFFFFF' }]}>
                        <TouchableOpacity style={[styles.button, { width: 250 }]}>
                            <Text style={styles.buttonText1}>修改活動內容</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        </View>
    )

};