import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Typography } from '../../components/Typography';
import { COLORS } from '../../Theme/Colors';
import { Icons } from '../../Theme/Icons';
import { GLOBALS } from '../../Constants/Globals';
import { styling } from '../../Theme/Styles/GlobalStyles';
import { PressableOpacity } from '../../components/Buttons/PressebleOpacity';

const ICON_SIZE = 16;

const itemIcons = {
  user: Icons.User,
  bank: Icons.Bank,
  phone: Icons.Phone,
};

const actionIcons = {
  delete: Icons.Delete,
  favHeart: Icons.FavHeart,
  favHeartFilled: Icons.FavHeartFilled,
  selected: Icons.CycleSelected,
  notSelected: Icons.CycleEmpty,
  navigate: Icons.ArrowRight,
  view: Icons.PasswordHidden,
  hide: Icons.PasswordVisible,
  copy: Icons.Copy,
  export: Icons.Outgoing,
};

export type BaseItemIcons = keyof typeof itemIcons;
export type BaseActionIcons = keyof typeof actionIcons;

type ListItemAction = {
  icon?: BaseActionIcons;
  iconColor?: string;
  onPress: () => void;
};

type BaseProps = {
  header: any;
  middle?: string;
  pressable?: boolean;
  onPress?: () => void;
  actions?: [ListItemAction] | [ListItemAction, ListItemAction];
  swipeable?: boolean;
  itemHeight?: number;
  headerColor?: string;
  testingSuffix: string;
  headerSize?: number;
  middleSize?: number;
  end?: React.ReactNode;
};

type BaseListItemProps = BaseProps &
  (
    | {
        icon?: BaseItemIcons | React.ReactNode;
        iconColor?: string;
        iconCircle?: boolean;
        avatar?: never;
        image?: never;
      }
    | {
        icon?: never;
        iconColor?: never;
        iconCircle?: never;
        avatar?: React.ReactNode;
        image?: never;
      }
    | {
        icon?: never;
        iconColor?: never;
        iconCircle?: never;
        avatar?: never;
        image?: string;
      }
  );

export const BaseListItem = ({
  header,
  middle,
  avatar,
  icon,
  iconColor,
  iconCircle = true,
  pressable,
  onPress,
  actions,
  swipeable,
  itemHeight,
  headerColor,
  image,
  testingSuffix,
  headerSize,
  middleSize,
  end,
}: BaseListItemProps) => {
  const Wrapper = pressable ? PressableOpacity : View;
  const height = itemHeight || 60;
  const withIcon = !!icon || !!image;

  const flex = {
    flex: actions?.length,
  };

  const renderIcon = () => {
    if (icon) {
      if (typeof icon === 'string') {
        return React.createElement(itemIcons[icon], {
          width: ICON_SIZE,
          height: ICON_SIZE,
        });
      } else return icon;
    }
  };

  return (
    <Wrapper
      activeOpacity={swipeable ? 1 : GLOBALS.ACTIVE_OPACITY}
      style={[styles.container, { height }]}
      onPress={onPress}
      testingSuffix={`${testingSuffix} Button`}
    >
      {withIcon && (
        <View
          style={[
            styling.center,
            styles.iconContainer,
            iconCircle && image
              ? { backgroundColor: iconColor || COLORS.OLIVE_LIGHT_ACTIVE }
              : iconCircle
              ? { backgroundColor: iconColor || COLORS.OLIVE_LIGHT_ACTIVE }
              : null,
          ]}
        >
          {renderIcon()}
          {image && (
            <Image
              source={{ uri: `data:image/jpg;base64,${image}` }}
              style={styles.iconContainer}
              resizeMode="cover"
            />
          )}
        </View>
      )}
      {avatar && avatar}
      <View style={styles.textWrapper}>
        <Typography color={headerColor} size={headerSize ?? 16} numberOfLines={1}>
          {header}
        </Typography>
        {middle && (
          <Typography size={middleSize ?? 12} color={COLORS.WHITE_DARK_ACTIVE} numberOfLines={1}>
            {middle}
          </Typography>
        )}
      </View>
      {!!actions?.length && (
        <View style={[styling.row, { height }, flex]}>
          {actions.map((action, index) => (
            <PressableOpacity
              key={index}
              style={styles.action}
              onPress={action?.onPress}
              testingSuffix={`${testingSuffix} Action ${index}`}
            >
              {action.icon &&
                React.createElement(actionIcons[action.icon], {
                  ...GLOBALS.ICON_SIZE,
                  color: action.iconColor,
                })}
            </PressableOpacity>
          ))}
        </View>
      )}
      {end && end}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.NEUTRAL_200,
    backgroundColor: COLORS.WHITE,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  textWrapper: {
    flex: 9,
    paddingLeft: 12,
  },
  action: {
    paddingRight: 1,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
