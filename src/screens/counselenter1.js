import React from 'react';
import {View, StyleSheet} from 'react-native';
import Buttonlist from "../components/Buttonlist";
import TitleImage from "../components/TitleImage";
import { SafeAreaView } from 'react-native';
import Titletwo from '../components/Titletwo';

const counselenter1 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Titletwo 
        title="8단계"
        text="등록카드 발급 여부 확인"
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

export default counselenter1;