import React, {useState} from 'react';
import { Button , TextInput, Modal,View, Text} from 'react-native';
import styles from '../styles';

export default function SignUp() {

  const [user_name, setUserName] = useState("");
  const [user_mail, setUserMail] = useState("");
  const [user_password, setUserPassword] = useState("");
  const[user_phone, setUserPhone] = useState("");

  // async function update(){
  //   try {
  //     const docRef = await db.collection("User").add({

  //       user_name: user_name,
  //       user_mail: user_mail,
  //       user_password: user_password,
  //       user_phone: user_phone

  //     });

  //     console.log(docRef.id);
  //     setUserName("");
  //     setUserPassword("");
  //     setUserMail("");
  //     setUserPhone("");
  //   }

  //   catch(error) {
  //     console.error("Error adding account: ", error);
  //   }

  // }

  return (

   <View style={styles.form}>  
      <TextInput
        style={styles.inputStyle}
        placeholder="姓名"
        value={user_name}
        onChangeText={text=>setUserName(text)}
      /> 
      <TextInput
        style={styles.inputStyle}
        placeholder="手機號碼"
        value={user_phone}
        onChangeText={text=>setUserPhone(text)}
      />      
      <TextInput
        style={styles.inputStyle}
        placeholder="電子信箱"
        value={user_mail}
        onChangeText={text=>setUserMail(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="密碼"
        value={user_password}
        onChangeText={text=>setUserPassword(text)}
        maxLength={15}
        secureTextEntry={true}
      />   
      <Button
        title="註冊"
        onPress={update}
      />
      
      <Text>
        已經註冊，我要登入
      </Text>
    </View>
  

  );

}