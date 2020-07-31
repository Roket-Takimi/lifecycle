import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Activities, Expenses, Login, Main, Plans, Signup } from './src/pages';
import { CaloriesDetail, ActivitiesDetail, ExpensesDetail, PlansDetail } from './src/pages/DETAILS'

import Calories from './src/pages/Calories'

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name={"Signup"} component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name={"Login"} component={Login} options={{ headerShown: false }} />
                <Stack.Screen name={"Main"} component={Main} options={{ headerShown: false }} />
                <Stack.Screen name={"Activities"} component={Activities} />
                <Stack.Screen name={"ActivitiesDetail"} component={ActivitiesDetail} options={{ headerTitle: "Aktivite detay" }} />
                <Stack.Screen name={"Calories"} component={Calories} options={{ headerShown: false }} />
                <Stack.Screen name={"CaloriesDetail"} component={CaloriesDetail} options={{ headerTitle: "Besin Değerleri" }} />
                <Stack.Screen name={"Expenses"} component={Expenses} />
                <Stack.Screen name={"ExpensesDetail"} component={ExpensesDetail} />
                <Stack.Screen name={"Plans"} component={Plans} />
                <Stack.Screen name={"PlansDetail"} component={PlansDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
