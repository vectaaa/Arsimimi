import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Typography } from '../../components/Typography';
import { Icons } from '../../Theme/Icons';
import { COLORS } from '../../Theme/Colors';

const ICON_LIST_SCALE = 30;

interface IProps {
  icon?: React.ReactNode;
  listEmptyMessage?: string;
  style?: ViewStyle;
}

const defaultIcon = (
  <Icons.Paper width={ICON_LIST_SCALE * 2} height={ICON_LIST_SCALE} color={COLORS.NEUTRAL_400} />
);

export const BaseEmptyList: React.FunctionComponent<IProps> = ({
  icon = defaultIcon,
  listEmptyMessage = 'No items found',
  style,
}) => (
  <View style={[styles.emptyListMessage, style]}>
    <>
      {icon}
      <Typography size={14} style={styles.emptyListMessageTitle}>
        {listEmptyMessage}
      </Typography>
    </>
  </View>
);

const styles = StyleSheet.create({
  emptyListMessage: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  emptyListMessageTitle: {
    letterSpacing: 0.3,
    paddingTop: 20,
    color: COLORS.NEUTRAL_400,
    textAlign: 'center',
  },
});
