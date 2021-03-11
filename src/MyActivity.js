import React, { useState, useEffect, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button, Dimensions } from 'react-native';
import styles from '../styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScrollView from 'react-native-input-scroll-view';
//import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';

export default function MyActivity() {
    
   
    return(
        <ScrollView >
            <View style={[styles.container,{}]}>
            <View style={{flexDirection:'column'}}>
                <View style={[styles.tipStyle,{marginBottom:0}]}>
                    <Text style={[styles.innerText,{padding: 20}]}>活動名稱：新品限時三天95折</Text>
                </View>
                <View style={[styles.tipStyle,{marginTop:0,marginBottom:0}]}>
                    <Text style={[styles.innerText,{padding: 20}]}>開始時間：</Text>
                </View>
                <View style={[styles.tipStyle,{marginTop:0,marginBottom:0}]}>
                    <Text style={[styles.innerText,{padding: 20}]}>結束時間：</Text>
                </View>
                <View style={[styles.tipStyle,{marginTop:0,marginBottom:0,borderBottomWidth:2}]}>
                    {/* <Text style={[styles.baseText,{padding: 20}]}>選擇商品圖片</Text> */}
                    <TouchableOpacity style={[styles.whitebutton, { width: 250}]}>
                         <Text style={styles.buttonTextAE}>修改活動內容</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        
     </ScrollView>
    ) 
      
  };