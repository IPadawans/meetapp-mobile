import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Subscriptions from './pages/Subscriptions';
import Profile from './pages/Profile';

import logo from './assets/images/logo.png';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createStackNavigator(
          {
            Index: createBottomTabNavigator(
              {
                Dashboard,
                Subscriptions,
                Profile,
              },
              {
                tabBarOptions: {
                  keyboardHidesTabBar: true,
                  activeTintColor: '#FFF',
                  inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                  style: {
                    backgroundColor: '#00BFFF',
                    borderTopColor: 'transparent',
                  },
                },
              }
            ),
          },
          {
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#6495ed',
                elevation: 0,
              },
              headerTitle: (
                <Image
                  source={logo}
                  style={{ width: 35, height: 35, flex: 1, marginBottom: 10 }}
                  resizeMode="contain"
                />
              ),
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
