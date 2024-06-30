import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
       tabBarActiveTintColor: colors.PRIMARY,
       tabBarInactiveTintColor: colors.INACTIVE
    }}>
        <Tabs.Screen name="home" options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color})=><FontAwesome name="home" size={24} color={color}/>
        }}/>
        <Tabs.Screen name="tables" options={{
            tabBarLabel: 'Tables',
            tabBarIcon: ({color})=><MaterialIcons name="table-bar" size={24} color={color}/>
        }}/>
        <Tabs.Screen name="profile" options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color})=><AntDesign name="profile" size={24} color={color} />
        }}/>
        <Tabs.Screen name="options" options={{
            tabBarLabel: 'Options',
            tabBarIcon: ({color})=><MaterialCommunityIcons name="poker-chip" size={24} color={color} />
        }}/>
    </Tabs>
  )
}