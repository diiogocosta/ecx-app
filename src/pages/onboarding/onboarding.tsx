import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import slides from './slides';
import CustomButton from '../../components/custom-button';
import { useNavigation, useRoute } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const { userId }: any = useRoute().params;
  console.log(userId);

  const image = require('../../../assets/images/logo-icone.png');
  const [lastPage, setLastPage] = useState(false);

  const proceedButton = (showButton: boolean) => {
    if (showButton) {
      return (
        <CustomButton
          onPress={() =>
            navigation.navigate('CreateAthlete', {
              userId,
            })
          }
          title="Vamos!"
          style={styles.primaryBtn}
        />
      );
    }
  };

  return (
    <>
      <Swiper
        style={{ zIndex: 0 }}
        loop={false}
        showsPagination={!lastPage}
        activeDotColor={'#FF3367'}
        dotColor={'#8E8E8E'}
        onIndexChanged={(index) => {
          setLastPage(index === 3);
        }}
      >
        {slides.map((slide, index) => {
          return (
            <View key={index} style={styles.slideItem}>
              <Image source={image} style={styles.logoImg} />
              <Image source={slide.imgSrc} />

              <View style={styles.textView}>
                <Text style={styles.titleText}>{slide.title}</Text>
                <Text style={styles.descriptionText}>{slide.description}</Text>
                {proceedButton(slide.showButton)}
              </View>
            </View>
          );
        })}
      </Swiper>
    </>
  );
};

const styles = StyleSheet.create({
  logoImg: {
    alignSelf: 'center',
  },
  slideItem: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#323337',
    paddingHorizontal: 45,
    paddingTop: 45,
  },
  textView: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 70,
    height: 40,
  },
  primaryBtn: {
    backgroundColor: '#FF3367',
    borderRadius: 25,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default Onboarding;
