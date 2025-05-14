import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreen} from '../../components/Screen/AppScreen';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {COLORS} from '../../Theme/Colors';
import {Icons} from '../../Theme/Icons';
import {FlatList} from 'react-native-gesture-handler';
import {PressableOpacity} from '../../components/Buttons/PressebleOpacity';
import { HelpStackScreenProps } from '../../navigation/types';

type HelpTypes = {
  id: string;
  title: string;
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const HelpListItem: React.FC<{item: HelpTypes}> = ({item}) => (
  <PressableOpacity testingSuffix={''} onPress={item.onPress}>
    <View style={styles.row}>
    <View style={styles.listItem}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.labelText}>{item.label}</Text>
    </View>
    <View>{item.icon}</View>
    </View>
  </PressableOpacity>
);

const Help = ({navigation}: HelpStackScreenProps<'Help'>) => {
  const openFaqs = () => {
    navigation.navigate('Faqs'); 
  };
  const openChatWithUs = () => {
    navigation.navigate('');
  };
  const openContactUs = () => {
    navigation.navigate('');
  };

  const helpItems: HelpTypes[] = [
    {
      id: '1',
      title: 'Call Us',
      label: 'Weekdays 9:00am - 5:00pm',
      icon: <Icons.PhoneIcon />,
      onPress: openContactUs,
    },
    {
      id: '2',
      title: 'Chat With Us',
      label: 'Send us an email for assistance',
      icon: <Icons.MessageIcon />,
      onPress: openChatWithUs,
    },
    {
      id: '3',
      title: 'FAQ',
      label: 'Swift answers for common queries',
      icon: <Icons.QuestionMarkIcon />,
      onPress: openFaqs,
    },
  ];

  return (
    <AppScreen>
      <View style={styles.topText}>
        <Text style={styling.font}>Get Help</Text>
        <Text style={styles.descText}>
          View and edit your account information
        </Text>
      </View>
      <FlatList
        data={helpItems}
        renderItem={({item}) => <HelpListItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </AppScreen>
  );
};

export default Help;

const styles = StyleSheet.create({
  descText: {
    fontFamily: 'georgia',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: COLORS.DARK_GRAY,
    marginTop: 8,
  },
  topText: {
    marginBottom: 32,
  },
  seperator: {
    height: 1,
    backgroundColor: COLORS.BORDER_GREY,
  },
  listItem: {
    marginVertical: 8,
  },
  titleText: {
    fontFamily: 'georgia',
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.ORANGE_NORMAL,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelText: {},
});
