import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

//For the rootstack navigation types
export type RootStackParamList = {
  SplashScreen: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppTabParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

//For the Auth Navigation Types
export type AuthStackParamList = {
  Onboarding: undefined;
  Register: undefined;
  ConfirmEmail: undefined;
  PersonalRegistration: undefined;
  LearningProfileOne: undefined;
  LearningProfileTwo: undefined;
  LearningTime: undefined;
  LoginScreen: undefined;
  Dashboard: undefined;
};
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

//For AppTab
export type AppTabParamList = {
  Home: undefined;
  ActivityStack: NavigatorScreenParams<ActivityStackParamList>;
  CommunityStack: NavigatorScreenParams<CommunityStackParamList>;
  HelpStack: NavigatorScreenParams<HelpStackParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

export type AppTabScreenProps<T extends keyof AppTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

//Homestack
export type HomeStackParamList = {
  Dashboard: undefined;
  HomeStack: NavigatorScreenParams<AppTabParamList>;
  PracticeTest: undefined,
  ExamMode: undefined,
};
export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

//Activity
export type ActivityStackParamList = {
  Activity: undefined;
};
export type ActivityStackScreenProps<T extends keyof ActivityStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ActivityStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;


//CommunityStack
export type CommunityStackParamList = {
  Community: undefined
};
export type CommunityStackScreenProps<T extends keyof CommunityStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CommunityStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

//Help
export type HelpStackParamList = {
  Help: undefined;
  CallUs: undefined;
  ChatWithUs: undefined;
  Faqs: undefined;
};
export type HelpStackScreenProps<T extends keyof HelpStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HelpStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

//Settings
export type SettingsStackParamList = {
  Settings: undefined;
};
export type SettingsStackScreenProps<T extends keyof SettingsStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SettingsStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

