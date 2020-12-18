import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalkdul = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="호스피스 의향"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="사전연명의료의향서 작성 시 호스피스 이용 의향을 선택할 수 있습니다."
        />
        <Textlist 
          text="호스피스란  호스피스 대상 환자와 그 가족에게 통증과 증상의 완화 등을 포함한 신체적, 심리사회적, 영적 영역에 대한 종합적인 평가와 치료를 목적으로 하는 의료로 입원형, 자문형, 가정형 호스피스가 있습니다."
        />
      </ScrollView> 
      <Buttonlist
        title = "다음"
        routename = "counseltalkdul2"
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

export default counseltalkdul;