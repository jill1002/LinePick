import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/linepick.jpg')}
                                size={80}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>LINEPICK</Title>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection} title="我的賣場">
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="賣場設定"
                            onPress={() => {props.navigation.navigate('賣場設定')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-chatbubbles-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="賴皮客服"
                            onPress={() => {props.navigation.navigate('賴皮客服')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-basket-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="我的商品"
                            onPress={() => {props.navigation.navigate('我的商品')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-add-circle-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="新增商品"
                            onPress={() => {props.navigation.navigate('新增商品')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection} title="賴皮紀錄">
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-bus-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="未出貨"
                            onPress={() => {props.navigation.navigate('賣場設定')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-bus-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="運送中"
                            onPress={() => {props.navigation.navigate('訂單紀錄')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-bus-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="已完成"
                            onPress={() => {props.navigation.navigate('我的商品')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-person-add-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="註冊"
                            onPress={() => {props.navigation.navigate('註冊')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-log-in-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="登入"
                            onPress={() => {props.navigation.navigate('登入')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="ios-exit-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="登出"
                            onPress={() => {props.navigation.navigate('登出')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 20,
      marginTop: 26,
      fontWeight: 'bold',
      color:'#77773c',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });