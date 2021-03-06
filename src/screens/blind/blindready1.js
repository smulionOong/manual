import React from 'react';
import {Text, View, StyleSheet, FlatList, Image,ScrollView} from 'react-native';
import Buttonlist from "../../components/Buttonlist";

import { SafeAreaView } from 'react-native';

import Textlist from '../../components/Textlist';
import ExonlyHead from '../../components/ExonlyHead';

import Titleblind2 from '../../components/Titleblind2';

const blindready1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <Titletwo 
        title="1단계"
        text="사전연명의료의향서 상담을 위한 준비"
      /> */}
      
      <Titleblind2 
        title="1단계"
        text="사전연명의료의향서 시각맞춤상담을 위한 준비"
      />
      <ScrollView style={{flex:2}}>
        {/* <TitleImage 
          imageSource = {require('../../assets/ready1.jpg')}
          style={{justifyContent:'center'}}
        />  */}
        {/* <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
            상담실 환경
            </Text>
          </View>
            <Text style={styles.extextstyle}>
            - 개인상담전용실(2~5평)
            </Text> 
            <Text style={styles.extextstyle}>
            - 테이블과 부드러운 등받이 의자(3~5개)
            </Text> 
            <Text style={styles.extextstyle}>
            - 냉난방기와 온도점검, 소음점검, 따뜻한 조명과 밝은 계열의 커튼과 벽지
            </Text>
            <Text style={styles.extextstyle}>
            - 정리·정돈과 청결 유지
            </Text>
            <Text style={styles.extextstyle}>
            - 상담실문앞에 '상담 중' 표시
            </Text>
        </View>
        <View style={styles.exliststyle}>
          <View style = {styles.exviewstyle}>
            <FontAwesome name="square" size={17} color="black" style={{alignSelf:'center'}}/>
            <Text style={styles.extitlestyle}>
            준비사항
            </Text>
          </View>
            <Text style={styles.extextstyle}>
            - 사전연명의료의향서 법정서식, 컴퓨터 또는 태블릿 PC
            </Text> 
            <Text style={styles.extextstyle}>
            - 의향서 설명 시 참고자료: 상담매뉴얼, 상담그림카드, 일지, 안내동영상, 카메라 또는 녹음기
            </Text> 
            <Text style={styles.extextstyle}>
            - 등록기관 지정서 비치 및 상담자 신원 확인이 가능한 상담자 신분증
            </Text>
        </View> */}
        <ExonlyHead 
          title="상담실 환경"
        />
        <Textlist 
          text="• 개인상담전용실(2~5평)"
        />
        <Textlist 
          text="• 테이블과 부드러운 등받이 의자(3~5개)"
        />
        <Textlist 
          text="• 냉난방기와 온도점검, 소음점검, 따뜻한 조명과 밝은 계열의 커튼과 벽지"
        />
        <Textlist 
          text="• 정리·정돈과 청결 유지"
        />
        <Textlist 
          text="• 상담실문앞에 <상담 중> 표시"
        />
      </ScrollView>
      <Buttonlist 
        title = "다음"
        routename = "blindready2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  extextstyle: {
    fontSize:20,
    color:'black',
    //paddingHorizontal: 10,
    flex:1,
    margin : 5,
    //alignSelf: 'center'
    textAlign: 'auto',
    lineHeight:30
  },
  extitlestyle:{
    alignSelf : 'center',
    //marginLeft : 10,
    fontSize:20,
    fontWeight : 'bold',
    marginLeft : 10,
    // borderColor : 'black',
    // borderWidth : 1
  },
  exviewstyle: {
    flexDirection : 'row',
    marginBottom : 10,
    alignContent : 'center',
    // borderColor : 'black',
    // borderWidth : 1
  }
});

export default blindready1;