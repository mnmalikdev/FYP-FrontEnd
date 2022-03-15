import React, {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ip = '172.24.32.1';
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmI5YWY3MjQ5YWU1M2ZhNTNmNGVmMiIsImlhdCI6MTY0NjM2OTQ5MywiZXhwIjoxNjU0MTQ1NDkzfQ.TkWnHBrAtolojIrRD7VNWTMesj9KoGacZImngZQhRz0';
var userId = '';

// const DATA="okkkkkkkkkk";
const signin = async props => {
  try {
    const response = await axios.post(`http://${ip}:3000/api/user/signIn`, {
      email: props.email,
      password: props.password,
    });

    console.log(response.data);
    token = response.data.token;
    userId = response.data.id;
    await AsyncStorage.setItem('Token', response.data.token);
    await AsyncStorage.setItem('id', response.data.id);
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const signup = async props => {
  console.log("====================working==============================")
  try {
    const response = await axios.post(`http://${ip}:3000/api/user/signup`, {
      name: props[1],
      email: props[0],
      password: props[2],
      passwordConfirm: props[3],
      age: props[4],
      Weight: props[5],
      Height: props[6],
      Gender: props[7],
      Goal: props[8],
      ActivityLevel: props[9],
      BodyFat: props[10],
      TargetWeight: props[11],
      weeklyGoal: props[12],
    });

    token = response.data.token;
    userId = response.data.id;
    await AsyncStorage.setItem('Token', response.data.token);
    await AsyncStorage.setItem('id', response.data.id);
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Error' + error);
    alert("Please Check your Details");
  }
};
const predictBodyFat = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/user/predictBodyFat`,
      {
        waist: 45,
      },
    );

    return response.data;
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const addCalories = async props => {
  console.log(props);
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/addMeal`,
      {
        MealType: props.type,
        FoodName: props.foodName,
        Calories: props.calories,
        Protein: props.protein,
        Carbs: props.corbs,
        Fats: props.fats,
      },
      {
        authorization: 'Check ' + token,
      },
    );
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const findFood = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/getMeal`,
      {
        MealType: props.type,
      },
      {
        authorization: 'Check ' + token,
      },
    );
    return response.data.result;
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const DeleteFood = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/meal/delete`,
      {
        id: props,
      },
      {
        authorization: 'Check ' + token,
      },
    );
    return response.data.result;
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const searchFood = async props => {
  try {
    const response = await axios.post(
      `https://trackapi.nutritionix.com/v2/natural/nutrients`,
      {
        query: props,
      },
      {
        headers: {
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          'x-app-id': '0c77ef17',
          'x-app-key': '9d318186320499a030ae51573a28f342',
        },
      },
    );

    const FoodName = response.data.foods[0].food_name;
    const Calories = response.data.foods[0].nf_calories;
    const Protein = response.data.foods[0].nf_protein;
    const Carbs = response.data.foods[0].nf_total_carbohydrate;
    const Fats = response.data.foods[0].nf_total_fat;
    console.log({FoodName, Calories, Protein, Carbs, Fats});
    return {FoodName, Calories, Protein, Carbs, Fats};
  } catch (error) {
    console.log('Error' + error);
    alert(error.message);
  }
};
const forgotPassword = async props => {
  try {
    const response = await axios.post(
      `http://${ip}:3000/api/user/forgotPassword`,
      {
        email: props.email,
      },
    );

    console.log(response.data);
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const resetPassword = async props => {
  try {
    const response = await axios.post(
      `  http://${ip}:3000/api/user/resetPassword`,
      {
        email: props.email,
        token: props.token,
        password: props.password,
      },
    );

    console.log(response.data);
    token = response.data.token;
    userId = response.data.id;
    if (response.data.status === 'success') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const userDetails =async props => {
  try {
    const response = await axios.post(`http://${ip}:3000/api/user/details`, {
      token: token
    });
    return response;

  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const DataContext = React.createContext();
export const DataProvider = ({children}) => {
  return (
    <DataContext.Provider
      value={{
        signin,
        signup,
        resetPassword, 
        forgotPassword,
        token,
        userId,
        predictBodyFat,
        addCalories,
        findFood,
        DeleteFood,
        searchFood,
        userDetails
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
