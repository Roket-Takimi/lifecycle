import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import {Activities,Calories,Expenses,Login,Main,Notes,Plans,Signup} from './src/pages';
import { CaloriesDetail } from './src/pages/DETAILS/CaloriesDetail';

const Stack = createStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginPage">
                <Stack.Screen name={"ActivityPage"} component={Activities}/>
                <Stack.Screen options={{headerShown:false}} name={"CaloriePage"} component={Calories}/>
                <Stack.Screen name={"CaloriesDetailPage"} component={CaloriesDetail} options={{headerTitle: "Besin Değerleri"}}/>
                <Stack.Screen name={"ExpensesPage"} component={Expenses}/>
                <Stack.Screen options={{headerShown:false}} name={"LoginPage"} component={Login}/>
                <Stack.Screen options={{headerShown:false}} name={"MainPage"} component={Main}/>
                <Stack.Screen name={"NotePage"} component={Notes}/>
                <Stack.Screen name={"PlanPage"} component={Plans}/>
                <Stack.Screen options={{headerShown:false}} name={"SignupPage"} component={Signup}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
