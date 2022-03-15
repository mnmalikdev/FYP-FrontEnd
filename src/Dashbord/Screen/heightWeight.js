import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {heightWeight as Styles} from '../Style/index';

const index = props => {
  const navigation = props.navigation;

  const [value, setValue] = React.useState('Male');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={{marginTop: 130}}>
        <View style={Styles.bottom}>
          <View style={Styles.bottomContainer}>
            <Text style={Styles.welcomeText}>Welcome</Text>
            <Text>Please enter your Details</Text>
          </View>
        </View>

        <View style={Styles.loginContainer}>
          <Input
            placeholder="Enter Weight in KG"
            onChangeText={e => {
              setWeight(e);
            }}
            leftIcon={<Icon name="weight" size={15} color="black" />}
          />
          <Input
            placeholder="Enter Height in Cm"
            onChangeText={e => {
              setHeight(e);
            }}
            leftIcon={<Icon name="text-height" size={15} color="black" />}
          />

          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            <View style={Styles.RadioButton}>
              <View style={{marginLeft: 25, marginRight: 25}}>
                <Text>Male</Text>
                <RadioButton value="Male" />
              </View>
              <View style={{marginLeft: 25, marginRight: 25}}>
                <Text>Female</Text>
                <RadioButton value="Female" />
              </View>
            </View>
          </RadioButton.Group>

          <LinearGradient
            start={{x: 0.3, y: 0.25}}
            end={{x: 0.5, y: 0.7}}
            locations={[0.3, 1.6, 0.6]}
            colors={['#5362D5', '#5362D5', '#5362D5']}
            style={Styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('SelectGole', [
                  ...props.route.params,
                  weight,
                  height,
                  value,
                ]);
                // console.log(weight+"=="+height+"=="+value)
              }}>
              <Text style={Styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};
export default index;
