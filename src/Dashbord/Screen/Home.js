import React, {useState, useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {homeStyle as styles} from '../Style/index';
import Icon from 'react-native-vector-icons/Entypo';
import {ProgressChart} from 'react-native-chart-kit';
import {ButtonGroup, Card} from 'react-native-elements';
import DataContext from '../../DataContext/DataContext';
const HomeScreen = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);
  const [taken, setTaken] = React.useState([0.4, 0.6, 0.4, 0.8]);
  const [graph, setGraph] = React.useState(taken);
  const navigation = props.navigation;
  // const {DATA} = useContext(DataContext);
  const data = {
    labels: ['Calories', 'Protein', 'Carbs', 'Fat'], // optional
    data: graph,
  };
  
    const DATA=[{
      title: 'Breakfast',
    },
    {
      title: 'lunch',
    },
    {
      title: 'Dinner',
    }];
  // console.log(DATA);
  return (
    <View style={styles.container}>
      <View>
        <ProgressChart
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          hideLegend={false}
        />
      </View>
      <View style={styles.buttonGroupStyle}>
        <ButtonGroup
          // buttonStyle={{width: 100}}
          buttonContainerStyle={{}}
          buttons={['Remaining', 'Consumed']}
          containerStyle={{}}
          disabled={[3, 4]}
          disabledStyle={{}}
          disabledTextStyle={{}}
          disabledSelectedStyle={{}}
          disabledSelectedTextStyle={{}}
          innerBorderStyle={{}}
          onPress={selectedIdx => {
            if (selectedIdx == selectedIndex) {
            } else {
              setGraph(graph.map(el => Math.abs(1 - el)));
              setSelectedIndex(selectedIdx);
            }
          }}
          selectedButtonStyle={{}}
          selectedIndex={selectedIndex}
          selectedIndexes={selectedIndexes}
          selectedTextStyle={{}}
          textStyle={{}}
        />
      </View>
      <View style={styles.updateAdd}>
        
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[style.separator, highlighted && {marginLeft: 0}]} />
            ))
          }
          data={DATA}
          renderItem={({item, index, separators}) => {
            return (
              <Card
                style={styles.cardStyle}
                containerStyle={styles.cardStyle}
                wrapperStyle={{}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <View
                  style={{
                    position: 'relative',
                    flexDirection: 'row',
                    flex: 1,
                    // alignItems: 'center',
                  }}>
                  <Text>0 cals , 0 p , 0 c , 0 p </Text>
                  <View style={styles.touchableSymble}>
                    <TouchableOpacity
                      onPress={() => navigation.push('FoodList',[item.title])} 
                      style={styles.plus}>
                      <Icon
                        name={'dots-three-horizontal'}
                        size={25}
                        color={'blue'} 
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plus} onPress={() => navigation.push('customCalories',[item.title])}> 
                      <Icon name={'plus'} size={25} color={'blue'} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            );
          }}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
