import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Coaching as styles} from '../Style/index';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import * as Progress from 'react-native-progress'; 
// import {Divider} from 'react-native-paper';
const Coaching = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.namePart}>
          <Text style={{fontSize: 35, padding: 10 , color: 'white'}}>Fatloss Goal</Text>

          <View style={styles.golesAndWeights}>
            <Text style={{fontSize: 17,color: 'white'}}>1.5KG/per week</Text>
            <Text style={{fontSize: 17,color: 'white'}}>Current weight:99KG</Text>
          </View>
        </View>

        <View style={styles.containerSecond}>
          <View style={styles.boxContainer}>
            <Text style={{fontSize: 23,color: 'white'}}>Cals</Text>
            <Text style={{fontSize: 19,color: 'white'}}>650</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={{fontSize: 23,color: 'white'}}>Protein</Text>
            <Text style={{fontSize: 19,color: 'white'}}>650</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={{fontSize: 23,color: 'white'}}>Carbs</Text>
            <Text style={{fontSize: 19,color: 'white'}}>650</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={{fontSize: 23,color: 'white'}}>Fats</Text>
            <Text style={{fontSize: 19,color: 'white'}}>650</Text>
          </View>
        </View>
        <Divider />
        <View style={styles.containerThird}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15, padding: 20,color: 'white'}}>Workout builder </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15, padding: 20,color: 'white'}}>Chat Bot </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15, padding: 20,color: 'white'}}>Nutrition </Text>
            
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.containerFourth}>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Total Check</Text>
            <Text style={styles.statusText}>5</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Next CheckIn Date</Text>
            <Text style={styles.statusText}>5</Text>
          </View>
        </View>
        <Divider />
        <View style={styles.progressBar}>
          <Progress.Bar color="white" progress={0.7} width={300} height={20} />
        </View>
        <View style={styles.checkInButton}>
          <Button
            title="Check in"
            onPress={() => {
              alert('Check in');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Coaching;
