import React, { createContext, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {reducer as ActivitiesReducer, initialState } from './ActivitiesReducer';
export const ActivitiesContext = createContext(initialState)



export const ActivitiesProvider = ( {children}) => {
    const [state, dispatch] = useReducer(ActivitiesReducer, initialState)
    
    return (
        <ActivitiesContext.Provider value={{state, dispatch}}>
            {children}
        </ActivitiesContext.Provider>
    )
}