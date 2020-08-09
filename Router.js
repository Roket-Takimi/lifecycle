import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Activities, AddActivities, ActivitiesDetailPage, ActivitiesEditPage, Expenses, Login, Main, Plans, Signup ,LoginControl, CaloriesDetail} from './src/pages';
import { ExpensesDetail, PlansDetail } from './src/pages/DETAILS'
import {Calories} from './src/pages/Calories'
import Provider from './src/context/Provider'

import {ActivitiesProvider} from './src/context/ActivitiesContext'


const Stack = createStackNavigator();

function Router() {
    return (
        <Provider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginControlPage">
                <Stack.Screen name={"LoginControlPage"} component={LoginControl} options={{ headerShown: false }} />
                <Stack.Screen name={"Signup"} component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name={"Login"} component={Login} options={{ headerShown: false }} />
                <Stack.Screen name={"Main"} component={Main} options={{ headerShown: false }} />
                <Stack.Screen name={"Activities"} component={Activities} options={{ headerShown: false }} />
                <Stack.Screen name={"AddActivities"} component={AddActivities} options={{ headerShown: false }} />
                <Stack.Screen name={"ActivitiesDetailPage"} component={ActivitiesDetailPage} options={{ headerShown: false }}/>
                <Stack.Screen name={"ActivitiesEditPage"} component={ActivitiesEditPage} options={{ headerShown: false }} />
                <Stack.Screen name={"Calories"} component={Calories} options={{ headerShown: false }} />
                <Stack.Screen name={"CaloriesDetail"} component={CaloriesDetail} options={{ headerTitle: "Besin Değerleri" }} />
                <Stack.Screen name={"Expenses"} component={Expenses} />
                <Stack.Screen name={"ExpensesDetail"} component={ExpensesDetail} />
                <Stack.Screen name={"Plans"} component={Plans} />
                <Stack.Screen name={"PlansDetail"} component={PlansDetail} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

export default () => {
    return (
        <ActivitiesProvider>
            <Router/>
        </ActivitiesProvider>
    )
}
