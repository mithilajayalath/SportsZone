import React from 'react';
import { Easing, Animated, Dimensions,TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Block, Text, theme } from "galio-framework";

import ComponentsScreen from '../screens/Components';
import HomeScreen from '../screens/Home';
import OnboardingScreen from '../screens/Onboarding';
import ProfileScreen from '../screens/Profile';
import ProScreen from '../screens/Pro';
import SettingsScreen from '../screens/Settings';
import MyMatchesScreen from '../screens/MyMatches';
import MatchRequestsScreen from '../screens/MatchRequests';
import OpenChallengesScreen from '../screens/OpenChallenge';
// New login and signup routes
import LoginScreen from '../screens/LoginPlayer';
import SignupScreen from '../screens/SignupPlayer';

import {Icon} from 'galio-framework'

import CustomDrawerContent from './Menu';
import { Header } from '../components';
import { Images, materialTheme } from "../constants/";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();
const Tab=createBottomTabNavigator()

const profile = {
  avatar: Images.Profile,
  name: "Rachel Brown",
  type: "Seller",
 // plan: "Free",
  rating: 4.8
};

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        // options={{
        //   header: ({ navigation, scene }) => (
        //     <Header
        //       white
        //       transparent
        //       title="Profile"
        //       scene={scene}
        //       navigation={navigation}
        //     />
        //   ),
        //   headerTransparent: true
        // }}
      />
    </Stack.Navigator>
  );
}
// Login



function SettingsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Settings" scene={scene} navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function ComponentsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Components"
        component={ComponentsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Components" scene={scene} navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}
function MyMatchesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="My Matches"
        component={MatchesTab}
        // options={{
        //   header: ({ navigation, scene }) => (
        //     <Header title="My Matches" scene={scene} navigation={navigation} />
        //   ),
        //   headerRight: ()=>(
        //     <TouchableOpacity>
        //      <Icon
        //       name='close'
        //       family='Galio'
        //       size={16}
        //     />  
        //   </TouchableOpacity>
        //   )
        // }}
      />
    </Stack.Navigator>
  );
}
function MatchesTab(props) {
  return (
    <TopTab.Navigator mode="card" headerMode="screen" tabBarOptions={{pressColor:"#3BAD36",indicatorStyle:{backgroundColor:"#3BAD36"}}}>
      <TopTab.Screen name="Upcoming Matches" component={MyMatchesScreen}/>
      <TopTab.Screen name="Match Requests" component={MatchRequestsScreen}  />
      <TopTab.Screen name="Open Challenges" component={OpenChallengesScreen}  />
    </TopTab.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        // options={{
        //   header: ({ navigation, scene }) => (
        //     <Header 
        //       title="Home"
        //       navigation={navigation}
        //       scene={scene}
        //     />
        //   )
        // }}
      />
      <Stack.Screen 
        name="Pro"
        component={ProScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back white transparent title="" navigation={navigation} scene={scene} />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#3BAD36',
       // inactiveTintColor:'#000'
      }}
      >
      <Tab.Screen name="Home" component={HomeStack}
        options={{tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => <Icon name='ios-home'
                                family='ionicon'
                                size={26} 
                                color={focused ? "#3BAD36" : "#000"}/>,
        
      }}
        />
      <Tab.Screen name="Matches" component ={MyMatchesStack}
      options={{tabBarLabel: 'Matches',
      tabBarIcon: ({focused}) => <Icon name='soccer'
                              family='material-community'
                              size={26} 
                              color={focused ? "#3BAD36" : "#000"}/>,
      
    }}
      />
      <Tab.Screen name="Find Court" component ={MyMatchesStack}
      options={{tabBarLabel: 'Courts',
      tabBarIcon: ({focused}) => <Icon name='soccer-field'
                              family='material-community'
                              size={26} 
                              color={focused ? "#3BAD36" : "#000"}/>,
    }}
      />
      <Tab.Screen name="Teams" component ={MyMatchesStack}
      options={{tabBarLabel: 'Teams',
      tabBarIcon: ({focused}) => <Icon name='users'
                              family='font-awesome'
                              size={26} 
                              color={focused ? "#3BAD36" : "#000"}/>,
    }}
      />
     
      
      <Tab.Screen name="Profile" component={ProfileStack}
       options={{tabBarLabel: 'Profile',
       tabBarIcon: ({focused}) => <Icon name='user'
                               family='font-awesome'
                               size={26} 
                               color={focused ? "#3BAD36" : "#000"}/>,

     }}
      />
    </Tab.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

/*
const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header white transparent title="Profile" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Settings" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ComponentsStack = createStackNavigator({
  Components: {
    screen: ComponentsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Components" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header search tabs title="Home" navigation={navigation} />,
    })
  },
  Pro: {
    screen: ProScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header back white transparent title="" navigation={navigation} />,
      headerTransparent: true,
    })
  },
},
{
  cardStyle: { 
    backgroundColor: '#EEEEEE', //this is the backgroundColor for the app
  },
  transitionConfig,
});

const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        drawerLabel: () => {},
      },
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="Home" />
        )
      }
    },
    Woman: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Woman" />
        ),
      }),
    },
    Man: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Man" />
        ),
      }),
    },
    Kids: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Kids" />
        ),
      }),
    },
    NewCollection: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="New Collection" />
        ),
      }),
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Profile" title="Profile" />
        ),
      }),
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Settings" title="Settings" />
        ),
      }),
    },
    Components: {
      screen: ComponentsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Components" title="Components" />
        ),
      }),
    },
    MenuDivider: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: () => <Block style={{marginVertical: 8}}><Text>{` `}</Text></Block>,
      },
    },
    SignIn: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Sign In" />
        ),
      }),
    },
    SignUp: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Sign Up" />
        ),
      }),
    },
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;

*/