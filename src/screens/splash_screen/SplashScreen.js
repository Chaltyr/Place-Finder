import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2500,
        useNativeDriver: true,
      }).start(() => {
        navigation.replace('Main');
      });
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.logoContainer]}>
        <Animated.Image
          source={require('../../assets/images/splash.jpg')}
          style={[styles.image, {opacity: fadeAnim}]}
        />
        <Animated.Text style={[styles.splashText, {opacity: fadeAnim}]}>
          Placefinder
        </Animated.Text>
      </View>
      <Animated.Text style={[styles.bottomSplashText, {opacity: fadeAnim}]}>
        The Searching Company
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    marginTop: -50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  splashText: {
    marginTop: 20,
    fontSize: 50,
    fontFamily: 'sans-serif-condensed',
  },
  bottomSplashText: {
    paddingBottom: 50,
    fontWeight: 800,
    fontSize: 20,
    fontFamily: 'sans-serif-thin',
  },
});

export default SplashScreen;
