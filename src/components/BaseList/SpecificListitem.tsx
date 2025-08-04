import React from 'react';
import { PressableOpacity } from '../Buttons/PressebleOpacity';
import { Typography } from '../Typography';
import { COLORS } from '../../Theme/Colors';
import { styles } from '../../screens/Registration/styles';
import { styling } from '../../Theme/Styles/GlobalStyles';
import { Spacer } from '../Spacer';
import { SecurityQuestion } from '../../Types/StudentService';

type SecurityQuestionItemProps = {
    item: SecurityQuestion;
    onPress: () => void;
    isSelected: boolean;
  };
export const SecurityQuestionItem = ({
  item,
  onPress,
  isSelected,
}: SecurityQuestionItemProps) => {
  const handlePress = () => {
    if (!isSelected) {
      onPress();
    }
  };
  return (
    <PressableOpacity
      onPress={handlePress}
      testingSuffix={`Select ${item.question}`}
      style={styles.securityQuestionItem}>
      <CircleCard
        color={COLORS.WHITE_NORMAL}
        icon={
          <Typography
            size={16}
            color={isSelected ? COLORS.WHITE_DARK : COLORS.BLACK_NORMAL}>
            {item.index}
          </Typography>
        }
      />
      <Spacer width={10} />
      <Typography
        color={isSelected ? COLORS.WHITE_DARK : COLORS.BLACK_NORMAL}
        style={styling.fill}>
        {item.question}
      </Typography>
    </PressableOpacity>
  );
};
