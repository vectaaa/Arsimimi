import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen} from '../../components/Screen/AppScreen';
import {COLORS} from '../../Theme/Colors';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {Icons} from '../../Theme/Icons';
import {Typography} from '../../Typography';

const Activity = () => {
  return (
    <AppScreen>
      <View style={styles.topText}>
        <Text style={styling.font}>Activity</Text>
        <Icons.MaleAvatarIcon />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.innerProgress}>
          <Icons.ProgressIcon />
          <Text style={styles.smallFont}>Progress</Text>
        </View>
        <View style={styles.innerProgressLine2}>
          <Typography color={COLORS.ORANGE_THICK} weight="700" size={20}>
            40
          </Typography>
          <Typography color={COLORS.GREY_100} weight="400" size={10}>
            Tests
          </Typography>
        </View>

        {/* <View style={styles.}></View> */}
      </View>
    </AppScreen>
  );
};

export default Activity;

const styles = StyleSheet.create({
  topText: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  progressContainer: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: COLORS.WHITE,
  },
  smallFont: {
    color: COLORS.ORANGE_THICK_100,
    fontFamily: 'georgia',
    fontSize: 10,
    fontWeight: '700',
  },
  innerProgressLine2: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  innerProgress: {
    flexDirection: 'row',
    gap: 8,
  },
});
