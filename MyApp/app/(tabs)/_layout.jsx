import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomTabView } from '@react-navigation/bottom-tabs';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#444444',
        tabBarInactiveTintColor: '#909090',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            paddingTop: 5,
            height: 80,
            borderTopWidth: 0,
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="flow"
        options={{
          title: 'flow',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chart.xyaxis.line" color={color} />,
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: 'diary',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="square.and.pencil" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'lately',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="face.smiling" color={color} />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'friends',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="figure.2" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
