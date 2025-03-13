import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


//For the rootstack navigation types
export type RootStackParamlist = {
    SplashScreen: undefined,
    Auth: NavigatorScreenParams<AuthStackParamList>
}

export type RootStackScreenProps <T extends keyof RootStackParamlist> = NativeStackScreenProps<RootStackParamlist, T>

//For the Auth Naviagtion Types 
export type AuthStackParamList = {
    Onboarding: undefined;
    Register: undefined;
    ConfirmEmail: undefined;
    PersonalRegistration: undefined;
    LearningProfileOne: undefined;
    LearningProfileTwo: undefined;
    LearningTime: undefined;
    LoginScreen: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = CompositeScreenProps<NativeStackScreenProps<AuthStackParamList, T>,
 RootStackScreenProps<keyof RootStackParamlist>
>;