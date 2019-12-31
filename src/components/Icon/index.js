import React from "react";
import {Image, View ,StyleSheet} from "react-native";
import home from '../../assets/home.png';
import user from '../../assets/user.png'
import bell from '../../assets/bell.png'
import options from '../../assets/options.png'


const iconMap = {
  home: home,
  user: user,
  bell: bell,
  options:options

};


const Icon = ({ name}) => {

  const icon = iconMap[name];
  return  name !== "button" ?<Image style={styles.Image} source={icon}/>:<View style={styles.btn}></View> ;
};

const styles = StyleSheet.create({
  btn:{
    width:80,
    height:40,
    backgroundColor:'#63c741',
    borderRadius:30,
    marginTop:1,
    marginBottom:3
  },
  Image:{
    margin:10,
    height:24,
    width:24,
    opacity:0.6
  }
})

export default Icon;