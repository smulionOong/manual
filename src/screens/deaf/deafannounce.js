import React from 'react';
import {StyleSheet, Image,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from "../../components/Imagelist";
import ButtonFinish from '../../components/ButtonFinish';

/**
사전연명의료의향서 작성이 완료되었습니다. 
작성해주신 사전연명의료의향서가 국립연명의료관리기관 시스템에 등록이 완료되면 작성자님의 휴대폰으로 “OOO님의 사전연명의료의향서가 시스템(www.lst.go.kr)에 등록 되었습니다.” 라고 문자가 발송됩니다. 
 */

const deafannounce = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="작성된 사전연명의료의향서 등록통보 안내"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/announce.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서 작성이 완료되었습니다."
        />
        <Textlist 
          text="작성해주신 사전연명의료의향서가 국립연명의료관리기관 시스템에 등록이 완료되면 작성자님의 휴대폰으로 “OOO님의 사전연명의료의향서가 시스템(www.lst.go.kr)에 등록 되었습니다.” 라고 문자가 발송됩니다."
        />
      </ScrollView> 
      <ButtonFinish 
        routename="deafmanual"
        routename2="deaffinish1"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle : {
    flex:1,
    justifyContent : 'center'
  },
  newliststyle: {
    //marginHorizontal : 20,
    marginBottom : 20,
    //marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    // paddingVertical: 10,
    // paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
  },
});

export default deafannounce;