import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from "../components/Imagelist";

const counseltalkhana9 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="담당의사가 판단한 의학적 시술"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/maintain.png')}
        />
        <Textlist 
          text="이 밖에도 담당의사가 환자의 상태와 상황에 따라 임종과정에 있는 환자의 이익을 위해 유보, 중단할 필요가 있다고 판단하는 시술이라면 중단할 수 있습니다."
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

export default counseltalkhana9;