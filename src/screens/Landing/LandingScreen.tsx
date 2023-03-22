import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TextInput, View} from 'react-native';

import {emptyString, userPinCode} from '../../constants/global.constants';
import localNumbers from '../../constants/global.numbers';
import localStrings from '../../constants/global.strings';
import landingScreenStyles from './LandingScreen.styles';
import routes from '../../constants/screen.routes';

/**
 * Landing screen component
 * @returns {JSX.Element}
 */
const LandingScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation<any>();
  const [codeInput, setCodeInput] = useState(emptyString);

  /**
   * checkSetCode method
   * @returns {void}
   */
  const checkSetCode = (code: string): void => {
    setCodeInput(code);
    if (code === userPinCode) {
      navigation.navigate(routes.AppBottomStack, {screen: routes.HomeScreen});
      setCodeInput(emptyString);
    }
  };

  return (
    <View style={landingScreenStyles.rootContainer}>
      <Text style={landingScreenStyles.welcomeText}>
        {localStrings.landingScreen.welcomeText}
      </Text>
      <Text style={landingScreenStyles.descriptionText}>
        {localStrings.landingScreen.welcomeMessage}
      </Text>
      <TextInput
        value={codeInput}
        onChangeText={num => checkSetCode(num)}
        maxLength={localNumbers.landingScreen.codeLength}
        style={landingScreenStyles.codeInput}
        keyboardType="numeric"
      />
    </View>
  );
};

export default LandingScreen;
