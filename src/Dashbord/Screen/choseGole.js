import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {choseGole as Styles} from '../Style/index';

const index = props => {
  const navigation = props.navigation;

  const [value, setValue] = useState(0);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      {/* <ImageBackground
        source={require('../Images/welcomePage.jpg')}
        style={Styles.background}>
        <Text style={Styles.Fitnessio}>Fitnessio</Text>
      </ImageBackground> */}
      <View style={Styles.background}></View>

      <View style={Styles.bottom}>
        <Text style={Styles.welcomeText}>Welcome</Text>
        <Text style={{paddingLeft: 30}}>Please enter your Details</Text>
      </View>

      <View style={Styles.loginContainer}>
        <View style={Styles.currentWeight}>
          <Text style={{fontSize: 20}}>Your Current weight is :99KG</Text>
        </View>
        <Text>Please Select your target weight</Text>
        <Input
          placeholder="Enter Weight"
          onChangeText={e => {
            setValue(e);
          }}
          leftIcon={<Icon name="weight" size={15} color="black" />}
        />

        <LinearGradient
          start={{x: 0.3, y: 0.25}}
          end={{x: 0.5, y: 0.7}}
          locations={[0.3, 1.6, 0.6]}
          colors={['#5362D5', '#5362D5', '#5362D5']}
          style={Styles.linearGradient}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('weight_lose_speed', [
                ...props.route.params,
                value,
              ])
            }>
            <Text style={Styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};
export default index;
