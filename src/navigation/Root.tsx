/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';
import {HomeStackParamList, RootStackParamList} from './types';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: undefined extends RootStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params: RootStackParamList[RouteName]]
    : [screen: RouteName, params: RootStackParamList[RouteName]]
): void {
  navigationRef.current?.isReady() && navigationRef.current?.navigate(...args);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function navigateAndReset(routes = [], index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
}

export function navigateAndSimpleReset(name: string, index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name}],
    }),
  );
}

type GetTransactionNavActionProps = {
  isSuccessful: boolean;
  amount: string;
  currency: string;
  fromAccountNumber: string;
  fromAccountType: string;
  reference: string;
  rows: string;
  closeRoute?: keyof HomeStackParamList;
  onRetry: () => void;
};

export const getTransactionNavAction = ({
  amount,
  currency,
  fromAccountNumber,
  fromAccountType,
  isSuccessful,
  reference,
  rows,
  closeRoute,
  onRetry,
}: GetTransactionNavActionProps) => {
  const statusParams = {
    amount,
    currency,
    fromAccountNumber,
    fromAccountType,
    isSuccessful,
    reference,
    rows,
    onRetry,
  };

  const routes = [
    {name: 'Dashboard'},
    {
      name: 'TransactionStatus',
      params: statusParams,
    },
  ];

  if (closeRoute) {
    routes.splice(1, 0, {name: closeRoute});
  }

  if (isSuccessful) {
    return CommonActions.reset({routes});
  } else {
    return CommonActions.navigate('TransactionStatus', statusParams);
  }
};
