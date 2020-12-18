import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Buttonlist from '../components/Buttonlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../components/TitlewithoutImage';
import Imagelist from '../components/Imagelist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselid3 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="의사능력결정 판단 알고리즘"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../assets/algo1.png')}
        />
        <Textlist 
          text="저희 등록기관은 OOO님께 사전연명의료의향서 작성 시 도움이 필요한 지 여부를 판단하기 위해 몇 가지 질문을 드립니다."
        />
        <Textlist 
          text="간단한 질문이므로 듣고 대답해주시길 부탁 드립니다."
        />
        {/* <Exlist 
          text = "(장애인 등록증은 주민번호 기재여부, 여권 및 외국인 등록증 유효기간 확인)"
        /> */}
      </ScrollView>
      <Buttonlist 
        title="다음"
        routename="counselid4"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  }
});

export default counselid3;