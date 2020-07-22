import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Activities,Calories,Expenses,Login,Main,Notes,Plans,Signup} from './src/pages';

const Stack = createStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginPage">
                <Stack.Screen name={"ActivityPage"} component={Activities}/>
                <Stack.Screen name={"CaloriePage"} component={Calories}/>
                <Stack.Screen name={"ExpensesPage"} component={Expenses}/>
                <Stack.Screen name={"LoginPage"} component={Login}/>
                <Stack.Screen name={"MainPage"} component={Main}/>
                <Stack.Screen name={"NotePage"} component={Notes}/>
                <Stack.Screen name={"PlanPage"} component={Plans}/>
                <Stack.Screen name={"SignupPage"} component={Signup}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
