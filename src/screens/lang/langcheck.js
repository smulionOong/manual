import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../../components/Textlist';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Imagelist from '../../components/Imagelist';
import ButtonFinish from '../../components/ButtonFinish';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const langcheck = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="사전연명의료의향서 작성 의사 확인"
      />
      <ScrollView style={{flex:2}}>
        <Imagelist 
          imageSource={require('../../../assets/check.jpg')}
        />
        <Textlist 
          text="사전연명의료의향서는 작성한 후에라도 언제든지 변경·철회할 수 있습니다."
        />
        <Textlist 
          text="자신이 원하는 삶의 마무리에 대해 충분히 생각하신 후 결정하시고 경제적인 부담이나 강압에 의해서가 아닌, 작성자 본인의 자발적 의사로 작성하시기 바랍니다."
        />
        <Textlist 
          text="사전연명의료의향서를 작성하시겠습니까?"
        />
        <Textlist 
          text="[사전연명의료의향서 작성을 원하지 않는 경우는 상담 종료]"
        />
        <Textlist 
          text="[사전연명의료의향서 작성을 원하는 경우는 작성자신분증을 통한 본인 확인]"
        />
      </ScrollView>
      <ButtonFinish 
        routename="langmanual"
        routename2="langid1"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  liststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 30,
    paddingHorizontal : 20,
    flexDirection : 'row'
  }
});

export default langcheck;