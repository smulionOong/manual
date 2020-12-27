import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../components/Buttonlist";
import TitleImage from "../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../components/Titletwo';

const counselfinish1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="10단계"
        text="사전연명의료의향서 작성 완료 안내"
      />
      <View style={{flex:2, justifyContent:'center'}}>
        <TitleImage 
          imageSource = {require('../../assets/noname.png')}
          style={{justifyContent:'center'}}
        /> 
      </View>
      <Buttonlist 
        title = "다음"
        routename = "counselinfo2"
      />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default counselfinish1;