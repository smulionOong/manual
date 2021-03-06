import React from 'react';
import {StyleSheet,View,Image, Button,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import TitlewithoutImage from '../../components/TitlewithoutImage';
import Buttonlist from '../../components/Buttonlist';
import Exwithhead from '../../components/Exwithhead';
import Circletext from '../../components/Circletext';
import Textlist from '../../components/Textlist';
import ButtonFinish from '../../components/ButtonFinish';
import ExImage from '../../components/ExImage';
import Imagelist from '../../components/Imagelist';
import ExonlyHead from '../../components/ExonlyHead';
import Numhead from '../../components/Numhead';
import Num2head from '../../components/Num2head';

/**
 * 이제 의향서를 등록하고자 합니다. 
 * 혹 더 궁금한 사항 있으신가요?
 * 작성된 의향서는 국립연명의료관리기관의 연명의료정보처리시스템에 저장이 됩니다. 
 * 그리고 지금까지 나누었던 상담내용 및 모든 정보는 저장되거나 유출되지 않습니다. 
 */

const edukind9 = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TitlewithoutImage 
        title="6.연명의료 시술의 종류"
      />
      <ScrollView style={{flex:2}}>
        {/* <Num2head 
          title="연명의료 중 중단할 수 없는 항목"
        /> */}
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            {/* <MaterialCommunityIcons name="numeric-1-circle-outline" size={25} color="black" style={{alignSelf:'center',fontWeight:'bold'}}/> */}
            <Text style={{alignSelf:'center', fontSize:21,fontWeight:'bold'}}>
              2)
            </Text>
            <View style={{flexDirection:'column'}}>
              <Text style={styles.extitlestyle}>
                연명의료중단 등 결정 이행 후
              </Text>
              <Text style={styles.extitlestyle}>
                중단할 수 없는 의료행위
              </Text>
            </View>
          </View>  
        </View>
        <Textlist 
          text="- 통증 완화를 위한 의료 행위"
        />
        <Textlist 
          text="- 영양분 공급"
        />
        <Textlist 
          text="- 물 공급"
        />
        <Textlist 
          text="- 산소의 단순 공급"
        />
      </ScrollView> 
      <ButtonFinish 
        routename="eduinfo"
        routename2="eduhos1"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'justify'
  },
  viewstyle:{
    marginHorizontal : 20,
    //marginBottom : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    padding : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
 },
 exliststyle:{
  marginHorizontal : 20,
  marginVertical : 15,
  borderWidth : 1,
  borderColor : 'white',
  color : 'white',
  backgroundColor : 'white',
  // paddingVertical: 30,
  // paddingHorizontal : 20,
  padding : 10
},
extitlestyle:{
  alignSelf : 'stretch',
  //marginLeft : 10,
  fontSize:20,
  fontWeight : 'bold',
  marginLeft : 10,
  // borderColor : 'black',
  // borderWidth : 1
},
exviewstyle: {
  flexDirection : 'row',
  //marginBottom : 10,
  alignContent : 'center',
  borderColor : 'white',
  borderWidth : 1
}
});

export default edukind9;