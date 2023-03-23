import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import routes from '../../constants/screen.routes';
import {emptyString, pinCodeKey} from '../../constants/global.constants';
import localNumbers from '../../constants/global.numbers';
import localStrings from '../../constants/global.strings';
import landingScreenStyles from './LandingScreen.styles';
import {storePinInLocal} from '../../utils/storePinInLocal';

/**
 * Landing screen component
 * @returns {JSX.Element}
 */
const LandingScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation<any>();

  // local string states
  const [pinError, setPinError] = useState(emptyString);
  const [localPin, setLocalPin] = useState(emptyString);
  const [codeInput, setCodeInput] = useState(emptyString);

  /**
   * clearStateNavigate method
   * @returns {void}
   */
  const clearStateNavigate = (): void => {
    setCodeInput(emptyString);
    navigation.navigate(routes.AppBottomStack, {screen: routes.HomeScreen});
  };

  /**
   * checkAuthPin method
   * @returns {void}
   */
  const checkAuthPin = (code: string): void => {
    if (code.length === localNumbers.landingScreen.pinLength) {
      // sign up
      if (localPin === null) {
        clearStateNavigate();
        storePinInLocal(code);
      }
      // log in
      else if (code === localPin) {
        clearStateNavigate();
      }
      // wrong code
      else {
        setCodeInput(emptyString);
        setPinError(localStrings.landingScreen.pinError);
      }
    }
  };

  /**
   * checkSetCode method
   * @returns {void}
   */
  const checkSetCode = (code: string): void => {
    setCodeInput(code);
    setPinError(emptyString);
    checkAuthPin(code);
  };

  /**
   * getStoredPin method
   * @returns {Promise<void>}
   */
  const setInitialRoute = async (): Promise<void> => {
    const jsonValue = await AsyncStorage.getItem(pinCodeKey);
    const localData = jsonValue !== null ? JSON.parse(jsonValue) : null;

    setLocalPin(localData);
    localData &&
      navigation.navigate(routes.AppBottomStack, {screen: routes.HomeScreen});
  };

  useEffect(() => {
    setInitialRoute();
  }, []);

  /**
   * ErrorMessage component
   * @returns {JSX.Element}
   */
  const ErrorMessage = (): JSX.Element => {
    if (!pinError.length) {
      return <></>;
    }
    return <Text style={landingScreenStyles.errorMessage}>{pinError}</Text>;
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
      <ErrorMessage />
    </View>
  );
};

export default LandingScreen;
