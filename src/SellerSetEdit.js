import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { Header, Left, Right, Body } from "native-base";
import styles from "../styles.js";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import ReactChipsInput from "react-native-chips";
import { Appbar } from "react-native-paper";
import axios from "axios";
import { Avatar } from "react-native-elements";

export default function SellerSetEdit({ navigation ,route}) {
  const id = 1;
  const [seller, setSeller] = useState([]);
  const [types, setTypes] = useState([]); //賣場商品分類
  useEffect(() => {
    async function fetchData() {
      console.log(id);
      const type = await axios.get("http://a8324ec7c82c.ngrok.io/Type");
      setTypes(type.data);
      const result = await axios.get(
        "http://a8324ec7c82c.ngrok.io/SellerSet/" + id
      );
      setSeller(result.data);
    }
    fetchData();
  }, []);

  var [typeChips, settypeChips] = useState([]); //chip

  var checkChip = 0;
  if (checkChip == 0) {
    typeChips = types.map((types) => [types.typeName]);
    checkChip += 1;
  }

  function send() {
    console.log(typeChips.map((post) => "newChips" + post));
    console.log(types.map((post) => "types" + post.typeName));
    if (types != [" "]) {
      try {
        for (var i = 0; i < typeChips.length; i++) {
          //找出新增的chip
          if (i == typeChips.length - 1) {
            let typeChipsStr = typeChips[i].join();
            console.log("typeChipsStr" + typeChipsStr);
            var newChips = typeChipsStr.split(",");
            console.log(newChips);
          }
        }

        var typesLength = types.length; //判斷要新增還是刪除
        var newChipsLength = newChips.length;
        console.log("productStylesLength" + typesLength);
        console.log("newChipsLength" + newChipsLength);
        if (typesLength < newChipsLength) {
          for (var i = 0; i < types.length; i++) {
            //新增
            for (var j = 0; j < newChips.length; j++) {
              if (newChips[j] == types[i].typeName) {
                console.log("i:" + types[i].typeName);
                console.log("j:" + newChips[j]);
                console.log("already inside");
              } else if (
                newChips[j] != types[i].typeName &&
                j == newChips.length - 1 &&
                i == types.length - 1
              ) {
                //console.log("i:" + types[i].typeName);
                //console.log("j:" + newChips[j]);
                console.log(newChips[j] + "not in");
                const newTypes = {
                  typeName: newChips[j],
                  sellerId: 1,
                };
                axios
                  .post("http://a8324ec7c82c.ngrok.io/TypeAdd/", newTypes)
                  .then((res) => {
                    console.log(res);
                    console.log(res.data);
                  });
              }
            }
          }
        } else if (typesLength > newChipsLength) {
          for (var i = 0; i < types.length; i++) {
            //刪除
            for (var j = 0; j < newChips.length; j++) {
              if (newChips[j] == types[i].typeName) {
                console.log("i:" + types[i].typeName);
                console.log("j:" + newChips[j]);
                console.log("not delete");
              } else if (
                newChips[j] != types[i].typeName &&
                j == newChips.length - 1 &&
                i == types.length - 1
              ) {
                //console.log("i:" + types[i].typeName);
                //console.log("j:" + newChips[j]);
                console.log(types[i].typeName + "delete");
                axios
                  .delete(
                    "http://a8324ec7c82c.ngrok.io/TypeDelete/" +
                      types[i].typeName
                  )
                  .then((res) => {
                    console.log(res);
                    console.log(res.data);
                  });
              }
            }
          }
        }

        const Seller = {
          sellerId: 1,
          sellerAccount: seller.sellerAccount,
          sellerPassword: seller.sellerPassword,
          sellerPhone: seller.sellerPhone,
          sellerMail: seller.sellerMail,
          marketName: seller.marketName,
          marketDesc: seller.marketDesc,
        };
        //console.log(customer);
        axios
          .put("http://a8324ec7c82c.ngrok.io/SellerEdit/", Seller)
          .then((res) => {
            console.log(res);
            //console.log(res.data);
            route.params.callback();
            navigation.goBack();
    
          });
        //route.params.callback();
        //navigation.goBack();
      } catch {}
    }

  }

  return (
    <ScrollView style={{ backgroundColor: "#f4f3eb" }}>
      <Appbar.Header style={{ backgroundColor: "#f9e7d2" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Text style={styles.baseText}>編輯賣場設定</Text>
      </Appbar.Header>
      <View style={styles.marketBorder2}>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.baseText}>
            <Icon name="ios-person-circle" color="#6b7f94" size={25} />
            使用者帳號:
          </Text>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={styles.textInputStyle}>
              <TextInput
                placeholder="請輸入使用者帳號"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8C7599"
                value={seller.sellerAccount}
                onChangeText={(text) =>
                  setSeller({ ...seller, sellerAccount: text })
                }
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.baseText}>
            <Icon name="ios-lock-closed" color="#6b7f94" size={25} />
            使用者密碼:
          </Text>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={styles.textInputStyle}>
              <TextInput
                placeholder="請輸入使用者密碼"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8C7599"
                value={seller.sellerPassword}
                onChangeText={(text) =>
                  setSeller({ ...seller, sellerPassword: text })
                }
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.baseText}>
            <Icon name="ios-call" color="#6b7f94" size={25} />
            手機號碼:
          </Text>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={styles.textInputStyle}>
              <TextInput
                placeholder="請輸入手機號碼"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8C7599"
                value={seller.sellerPhone}
                onChangeText={(text) =>
                  setSeller({ ...seller, sellerPhone: text })
                }
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.baseText}>
            <Icon name="ios-mail" color="#6b7f94" size={25} />
            電子郵件:
          </Text>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={styles.textInputStyle}>
              <TextInput
                placeholder="請輸入電子郵件"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8C7599"
                value={seller.sellerMail}
                onChangeText={(text) =>
                  setSeller({ ...seller, sellerMail: text })
                }
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.baseText}>
            <Icon name="ios-basket" color="#6b7f94" size={25} />
            賣場名稱:
          </Text>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={styles.textInputStyle}>
              <TextInput
                placeholder="請輸入賣場名稱"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8C7599"
                value={seller.marketName}
                onChangeText={(text) =>
                  setSeller({ ...seller, marketName: text })
                }
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.baseText}>
            <Icon name="ios-information-circle" color="#6b7f94" size={25} />
            賣場簡介:
          </Text>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={styles.textInputStyleLarge}>
              <TextInput
                placeholder="請輸入賣場簡介"
                underlineColorAndroid="transparent"
                placeholderTextColor="#8C7599"
                value={seller.marketDesc}
                onChangeText={(text) =>
                  setSeller({ ...seller, marketDesc: text })
                }
                style={{ padding: 10 }}
              />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text style={styles.baseText}>
            <Icon name="ios-apps" color="#6b7f94" size={25} />
            賣場商品分類
          </Text>
        </View>
        <View style={{ paddingLeft: 18 }}>
          <ReactChipsInput
            label="請輸入賣場商品分類"
            // initialChips={types.map((types) => (
            //     [types.typeName]
            // ))}
            initialChips={typeChips}
            onChangeChips={(chips) => typeChips.push(chips)}
            alertRequired={true}
            chipStyle={{ borderColor: "#f9e7d2", backgroundColor: "#f9e7d2" }}
            inputStyle={{ fontSize: 10 }}
            labelStyle={{ color: "#8C7599", fontSize: 15 }}
            labelOnBlur={{ color: "#666" }}
          />
        </View>
        <TouchableOpacity
          style={[styles.button, { width: 100, margin: 30 }]}
          onPress={send}
        >
          <Text style={{ color: "#FFFF", fontWeight: "bold" }}>完成</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
