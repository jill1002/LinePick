import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProductLaunch from './ProductLaunch';
// import AddProduct from './AddPrudoct';
// import MyActivity from './src/MyActivity';
// import ActivitySet from './src/ActivitySet';
import { Header, Left, Right, Body, Thumbnail, Container, Content, Subtitle, Item } from 'native-base';
import { Menu, Drawer } from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import styles from '../styles';

export default function DrawerPage() {
  const navigation = useNavigation();
  return (

    <SafeAreaProvider style={styles.container1,{ flex: 1, justifyContent: 'space-between', marginTop: 20 }}>

     
        <TouchableOpacity style={{ margin: 20}} onPress={() => navigation.navigate('上方導覽列')}>
          <Text style={styles.drawerText}>回導覽列</Text>
        </TouchableOpacity>
 

      <View style={{ flex: 1 }}>
        <Menu.Item title="我的賣場" titleStyle={styles.baseText1}></Menu.Item>
        <Text style={styles.underLine}></Text>
        <TouchableOpacity style={{ marginLeft: 20, flex: 1 }} onPress={() => navigation.navigate('賣場設定')}>
          <Text style={styles.drawerText}>賣場設定</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Menu.Item title="活動管理" titleStyle={styles.baseText1}></Menu.Item>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('新增活動')}>
          <Text style={styles.drawerText}>新增活動</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('我的活動')}>
          <Text style={styles.drawerText}>我的活動</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Menu.Item title="賴皮紀錄" titleStyle={styles.baseText1}></Menu.Item>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('查看訂單狀況')}>
          <Text style={styles.drawerText}>查看訂單狀況</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('待出貨')}>
          <Text style={styles.drawerText}>待出貨</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('運送中')}>
          <Text style={styles.drawerText}>運送中</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('已完成')}>
          <Text style={styles.drawerText}>已完成</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Menu.Item title="商品管理" titleStyle={styles.baseText1}></Menu.Item>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('新增商品')}>
          <Text style={styles.drawerText}>新增商品</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('商品庫存')}>
          <Text style={styles.drawerText}>商品庫存</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('重新上架商品')}>
          <Text style={styles.drawerText}>重新上架商品</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Menu.Item title="自動回覆" titleStyle={styles.baseText1}></Menu.Item>
        <TouchableOpacity style={{ marginLeft: 20,flex:1 }} onPress={() => navigation.navigate('關鍵字問題')}>
          <Text style={styles.drawerText}>設定常見問題</Text>
        </TouchableOpacity>
      </View>

      {/* <Drawer.Section title="我的賣場" style={styles.baseText1}>
          <Drawer.Item
            onPress={() => navigation.navigate('上方導覽列')}
            label="上方導覽列"
            style={styles.baseText1}>
          </Drawer.Item>
          <Drawer.Item
            onPress={() => navigation.navigate('上架商品')}
            label="上架商品">
          </Drawer.Item>
        </Drawer.Section> */}


      {/* <View>
        <Drawer.Section title="活動管理">
          <Drawer.Item
            onPress={() => navigation.navigate('新增活動')}
            label="新增活動">
          </Drawer.Item>
        </Drawer.Section>
      </View> */}

    </SafeAreaProvider>

  );
}










