import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Activities, AddActivities, Plansyedek, ActivitiesDetailPage, ActivitiesEditPage, Expenses, Login, Main, Plans, Signup, LoginControl, CaloriesDetail } from './src/pages';
import { ExpensesDetail, PlansDetail,  } from './src/pages/DETAILS'
import { Calories } from './src/pages/Calories'
import Provider from './src/context/Provider'
import { ActivitiesProvider } from './src/context/ActivitiesContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="LoginControlPage">
                    <Stack.Screen name={"LoginControlPage"} component={LoginControl} options={{ headerShown: false }} />
                    <Stack.Screen name={"Signup"} component={Signup} options={{ headerShown: false }} />
                    <Stack.Screen name={"Login"} component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

function HomeScreen() {
    return (
        <Tab.Navigator initialRouteName="Main" keyboardHidesTabBar 
        tabBarOptions={{ animationEnabled: true, showLabel: false, 
            activeTintColor: '#e91e63',
    }}>
  <Tab.Screen name="CaloriesPages" component={CaloriesPages} options={{
                tabBarIcon: ({ focused, size, color }) => (focused ?
                    <Icon name="food-apple" size={20} color="#2980b9" />
                    :
                    <Icon name="food-apple-outline" size={20} />
                ),
            }} />
             <Tab.Screen name="PlansPages" component={PlansPages} options={{
                tabBarIcon: ({ focused, size, color }) => (focused ?
                    <Icon name="calendar" size={20} color="#2980b9"  />
                    :
                    <Icon name="calendar-blank-outline" size={20}  />
                ),
            }} />
           
          
            <Tab.Screen name="Main" component={Main} options={{
                tabBarIcon: ({ focused, size, color }) => (focused ?
                    <Icon name="bicycle" size={35} color="#2980b9"  />
                    :
                    <Icon name="bicycle" size={30}  />
                ),
            }} />
             <Tab.Screen name="ActivitiesPages" component={ActivitiesPages} options={{
                tabBarIcon: ({ focused, size, color }) => (focused ?
                    <Icon name="yoga" size={20} color="#2980b9" />
                    :
                    <Icon name="run" size={20}  />
                ),
            }} />
            <Tab.Screen name="ExpensesPages" component={ExpensesPages} options={{
                tabBarIcon: ({ focused, size, color }) => (focused ?
                    <Icon name="credit-card" size={20} color="#2980b9"  />
                    :
                    <Icon name="cash" size={20} />
                ),
            }} />
           
        </Tab.Navigator>
    );
}

function ActivitiesPages() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Activities" component={Activities} options={{ headerShown: false }} />
            <Stack.Screen name="ActivitiesDetailPage" component={ActivitiesDetailPage} options={{ headerShown: false }} />
            <Stack.Screen name="ActivitiesEditPage" component={ActivitiesEditPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function CaloriesPages() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Calories" component={Calories} options={{ headerShown: false }} />
            <Stack.Screen name="CaloriesDetail" component={CaloriesDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function ExpensesPages() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Expenses" component={Expenses} options={{ headerShown: false }} />
            <Stack.Screen name="ExpensesDetail" component={ExpensesDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function PlansPages() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Plansyedek" component={Plansyedek} options={{ headerShown: false }} 
             initialParams={{ id: 15 }}/>
             <Stack.Screen name="Plans" component={Plans} options={{ headerShown: false }} 
             initialParams={{ id: 15 }}/>
            <Stack.Screen name="PlansDetail" component={PlansDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default () => {
    return (
        <ActivitiesProvider>
            <Router />
        </ActivitiesProvider>
    )
}
