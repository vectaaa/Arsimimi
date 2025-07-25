import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppScreen} from '../../components/Screen/AppScreen';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {TextInput as RNTextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../Theme/Colors';
import {Icons} from '../../Theme/Icons';
import {PressableOpacity} from '../../components/Buttons/PressebleOpacity';

const Settings = () => {
  //Name Field State
  const [name, setName] = useState('');
  const [isNameEditable, setIsNameEditable] = useState(false);
  const nameInputRef = useRef<RNTextInput>(null);

  const enableNameEdit = () => {
    setIsNameEditable(true);
    setTimeout(() => nameInputRef.current?.focus(), 100);
  };
  return (
    <AppScreen>
      <View>
        <Text style={styling.font}>Settings</Text>
        <Text style={styling.descText}>
          View and edit your account information
        </Text>
      </View>

      {/* Name and Email (Name) */}
      <View style={styles.whiteContainer}>
        <View style={styling.row}>
          <Text style={styles.textTitle}>Name</Text>
          <View style={styling.row}>
            <RNTextInput
              value={name}
              placeholder="Amos"
              style={styles.valueTitle}
              editable={isNameEditable}
              onChangeText={setName}
              ref={nameInputRef}
            />
            <PressableOpacity testingSuffix={''} onPress={enableNameEdit}>
              <Icons.PencilIcon />
            </PressableOpacity>
          </View>
        </View>
        <View style={styles.seperator} />

        {/* Name and Email (Email)*/}
        <View style={styles.rowEmail}>
          <Text style={styles.textTitle}>Email</Text>
          <Text style={styles.valueTitle}>AmosOsamudia@gmail.com</Text>
        </View>
      </View>

      {/* Section B (School) */}
      <View style={styles.whiteContainer}>
        <View style={styling.row}>
          <Text style={styles.textTitle}>School</Text>
          <View style={styling.row}>
            <RNTextInput
              value={name}
              placeholder="Amos"
              style={styles.valueTitle}
              editable={isNameEditable}
              onChangeText={setName}
              ref={nameInputRef}
            />
            <PressableOpacity testingSuffix={''} onPress={enableNameEdit}>
              <Icons.PencilIcon />
            </PressableOpacity>
          </View>
        </View>
        <View style={styles.seperator} />

        {/* Section B (Level) */}
        <View style={styling.row}>
          <Text style={styles.textTitle}>Level</Text>
          <View style={styling.row}>
            <RNTextInput
              value={name}
              placeholder="KFC High-School   "
              style={styles.valueTitle}
              editable={isNameEditable}
              onChangeText={setName}
              ref={nameInputRef}
            />
            <PressableOpacity testingSuffix={''} onPress={enableNameEdit}>
              <Icons.PencilIcon />
            </PressableOpacity>
          </View>
        </View>
        <View style={styles.seperator} />

        {/* Section B (Class) */}
        <View style={styling.row}>
          <Text style={styles.textTitle}>Class</Text>
          <View style={styling.row}>
            <RNTextInput
              value={name}
              placeholder="JSS3"
              style={styles.valueTitle}
              editable={isNameEditable}
              onChangeText={setName}
              ref={nameInputRef}
            />
            <PressableOpacity testingSuffix={''} onPress={enableNameEdit}>
              <Icons.PencilIcon />
            </PressableOpacity>
          </View>
        </View>
        <View style={styles.seperator} />

        {/* Name and Email (Email)*/}
        <View style={styles.rowEmail}>
          <Text style={styles.textTitle}>Exams</Text>
          <Text style={styles.valueTitle}>Junior Waec, Midterms +</Text>
        </View>
      </View>
    </AppScreen>
  );
};

export default Settings;

const styles = StyleSheet.create({
  whiteContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    marginTop: 32,
    padding: 10,
    justifyContent: 'center',
  },
  seperator: {
    height: 0.6,
    backgroundColor: COLORS.BLACK_LIGHT,
    marginBottom: 10,
  },
  rowEmail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textTitle: {
    fontFamily: 'georgia',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15,
    color: COLORS.ORANGE_THICK,
  },
  valueTitle: {
    fontFamily: 'georgia',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15,
    color: COLORS.BLACK_100,
  },
});
