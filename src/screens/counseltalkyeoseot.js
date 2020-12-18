import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

/**
 * 
 * 등록기관의 폐업 휴업 및 지정 취소에 따른 기록의 이관에 관하여 설명드리겠습니다. 
사전연명의료의향서 등록기관이 폐업되거나 1개월 이상 휴업 또는 지정 취소되는 경우 사전연명의료의향서의 등록, 변경, 철회에 관한 모든 기록은 관리기관인 국립연명의료관리기관에 이관됩니다. 
 */

const counseltalkyeoseot = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="기록,이관"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="등록기관의 폐업 휴업 및 지정 취소에 따른 기록의 이관에 관하여 설명드리겠습니다."
        />
        <Textlist 
          text="사전연명의료의향서 등록기관이 폐업되거나 1개월 이상 휴업 또는 지정 취소되는 경우 사전연명의료의향서의 등록, 변경, 철회에 관한 모든 기록은 관리기관인 국립연명의료관리기관에 이관됩니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "완료"
        routename = "counseltalk7"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  }
});

export default counseltalkyeoseot;