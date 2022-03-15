import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import chatBot from './src/ChatBot/chat';
import activityLevel from './src/Dashbord/Screen/activityLevel';
import bodyFat from './src/Dashbord/Screen/bodyFat';
import choseGole from './src/Dashbord/Screen/choseGole';
import Confirm from './src/Dashbord/Screen/Confirm';
import customCalories from './src/Dashbord/Screen/customCalories';
import dashbord from './src/Dashbord/Screen/dashbord';
import FoodList from './src/Dashbord/Screen/foodList';
import heightWeight from './src/Dashbord/Screen/heightWeight';
import SelectGole from './src/Dashbord/Screen/SelectGole';
import weight_lose_speed from './src/Dashbord/Screen/weightLoseSpeed';
import {DataProvider} from './src/DataContext/DataContext';
import createAccount from './src/Login/Screen/createAccount';
import forgotPassword from './src/Login/Screen/forgotPassword';
import index from './src/Login/Screen/index';
import login from './src/Login/Screen/login';
import resetPassword from './src/Login/Screen/resetPassword';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomePage" component={index} />
          <Stack.Screen name="Login" component={login} />
          <Stack.Screen name="createAccount" component={createAccount} />
          <Stack.Screen name="forgotPassword" component={forgotPassword} />
          <Stack.Screen name="resetPassword" component={resetPassword} />
          <Stack.Screen name="Dashbord" component={dashbord} />
          <Stack.Screen name="heightWeight" component={heightWeight} />
          <Stack.Screen name="SelectGole" component={SelectGole} />
          <Stack.Screen name="activityLevel" component={activityLevel} />
          <Stack.Screen name="bodyFat" component={bodyFat} />
          <Stack.Screen name="choseGole" component={choseGole} />
          <Stack.Screen
            name="weight_lose_speed"
            component={weight_lose_speed}
          />
          <Stack.Screen name="Confirm" component={Confirm} />
          <Stack.Screen name="customCalories" component={customCalories} />
          <Stack.Screen name="FoodList" component={FoodList} />
          {/* <Stack.Screen name="chatBot" component={chatBot} /> */}
          <Stack.Screen name="chatBot" component={chatBot} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
function AppRetuern() {
  return (
    <DataProvider>
      <App />
    </DataProvider>
  );
}
export default Ap = AppRetuern;
