import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {indexStyle as Styles} from '../Style/index';

const index = props => {
  const navigation = props.navigation;

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false}>
      <Animated.View
        style={[
          ,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <ImageBackground
          source={require('../Images/welcomePageMain.jpg')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height / 1,
          }}>
          <Image
            style={Styles.logo}
            source={require('../Images/Fitnessio-logos_white.png')}
          />

          <TouchableOpacity
            style={Styles.loginButton}
            onPress={() => {
              fadeOut();
              setTimeout(() => navigation.push('Login'), 3100);
            }}>
            <Text style={Styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.createAccountButton}
            onPress={() => {
              fadeOut();
              setTimeout(() => navigation.push('createAccount'), 3100);
            }}>
            <Text style={Styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>
        </ImageBackground>
      </Animated.View>
    </ScrollView>
  );
};
export default index;
