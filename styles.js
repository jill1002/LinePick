import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#c8d3c5',
    flex: 1,
    
   // flexDirection: 'column',
   //#FFFCC
  },
  homecontainer: {
    backgroundColor: '#FFFCEC',
    flex: 10,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0, //若無值則||or 0(置頂)
  },
  baseText: {
    color: '#6b7f94',
    fontWeight: "bold",
    fontSize: 20,
    flex:1
    //#c5b8a5
  },
  innerText: {
    color: "gray",
    fontSize: 15,
  },
  border: {
    borderColor: '#AE8F00',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  signupborder: {
    borderColor: '#b5c4b1',
    borderWidth: 4,
    borderRadius:10,
    flexDirection: 'column', 
    padding: 20, 
    paddingTop:55,
    marginTop:"10%",
    width:325,
    position:'absolute',
    zIndex: -1,
    
  },
  button: {
   margin: 20,
   padding: 10,
   paddingLeft: 20,
   paddingRight: 20,
    backgroundColor: '#6b7f94',
    borderRadius: 9,
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center'
    //#c5b8a5
  },
  multibuttons: {
    margin:10,
    padding:5,
    backgroundColor: '#6b7f94',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center'
    //#c5b8a5
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  uploadarea: {
    borderColor: '#6b7f94',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderStyle: 'dashed',
    marginHorizontal: 150,
    backgroundColor:'#FFFFFF'
    //#c5b8a5
  },
  icon: {
    color:'#2C384A',
    fontSize: 28,
  },
  textarea:{
    borderColor: '#6b7f94',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    //#c5b8a5
  },
  appbartitle:{
    backgroundColor:'#EAC100',
  },
  orderscheckStyle:{
    borderStyle:'solid',
    borderColor: '#6b7f94',
    borderWidth: 2,
    borderBottomWidth:0,
    marginLeft:15,
    marginVertical:20,
    backgroundColor:'#FFFFFF'
    //#c5b8a5
  },
  signuptextarea:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginBottom: 10,
    backgroundColor:'#FFFFFF'
  }
})
export default styles;