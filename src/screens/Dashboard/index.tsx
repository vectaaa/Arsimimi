import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AppScreen} from '../../components/Screen/AppScreen';
import { Icons } from '../../Theme/Icons';
import { Typography } from '../../Typography';

const Dashboard = () => {
  return (
    <AppScreen>
      <View style={styles.topRow}>
        <Icons.MaleAvatarIcon/>
        <Typography>Hi, {firstname}</Typography>
      </View>
    </AppScreen>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  topRow: {
    flex: 1,
    flexDirection: 'row',
  }
});
