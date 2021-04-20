import React, { useState } from 'react';
import { View, Text, TouchableOpacity,  ScrollView, TextInput} from 'react-native';
import styles from '../styles.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { IconButton } from 'react-native-paper';
import Tags from "react-native-tags";
import Icon from 'react-native-vector-icons/Ionicons';

export default function SellerSet() {
    const [inputscroll, setInputscroll] = useState('');
    const [categories, setCategories] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [newtags, setNewtags] = useState('');
    const [text,setText]=useState('');
    //const renderItem = ({ item, style }) => (
    return (
        
            <View style={styles.container}>
                <ScrollView>
                <View style={{ flexDirection: 'row', padding: 15 }}>
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
                            multipleText="%d items have been selected."
                            min={1}
                            max={3}
                            defaultValue={categories}
                            containerStyle={{ height: 40 }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            onChangeItem={item => setCategories(item)}
                        />

                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <View>
                        <Text style={styles.baseText}>賣場簡介</Text>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 5 ,flex:1}}>
                          <View>
                            <TextInput 
                                style={[styles.signuptextarea,{flex:1}]}
                                onChangeText={setText}
                                value={text}
                                underlineColorAndroid="transparent"
                                placeholder={"請輸入您的賣場簡介"}
                                placeholderTextColor={"#9E9E9E"}
                                numberOfLines={10}
                                maxlength={10}
                                multiline={true}
                           />  
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <View>
                        <Text style={styles.baseText}>電子信箱</Text>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 5 ,flex:1}}>
                    <TextInput style={[styles.signuptextarea,{flex:1}]}
                                onChangeText={setEmail}
                                value={email}
                                underlineColorAndroid="transparent"
                                placeholder={"電子郵件"}
                                placeholderTextColor={"#9E9E9E"}
                                numberOfLines={10}
                                maxlength={10}
                                multiline={true}
                            />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <View>
                        <Text style={styles.baseText}>手機號碼</Text>
                    </View>
                    <View style={{ flexDirection: 'column', padding: 5 ,flex:1}}>
                    <TextInput style={styles.signuptextarea}
                                value={cellphone}
                                onChangeText={setCellphone}
                                placeholder="手機號碼"
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
                            icon="plus-circle"
                            color='#6b7f94'
                            size={28}
                            onPress={() => console.log('Pressed')}
                        />

                    </View>
                </View>
                <View style={{ flexDirection: 'column', padding: 8 }}>
                    <View>
                        <Text style={styles.baseText}>商品分類</Text>
                        <Text style={{color:"#6b7f94"}}>(輸入完畢請按空白鍵)</Text>
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
                </ScrollView>
            </View>
        
    );
    // );
}