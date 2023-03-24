import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
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
  const [localPin, setLocalPin] = useState(emptyString);
  const [codeInput, setCodeInput] = useState(emptyString);

  const initialErrorState = {showForgot: false, errorMessage: emptyString};
  const [pinError, setPinError] = useState(initialErrorState);
  const isPinError = pinError.errorMessage.length > 0;

  const [errorCount, setErrorCount] = useState(0);

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
      else if (code === localPin) clearStateNavigate();
      // wrong code
      else {
        // if user entered wrong code 2 times
        if (errorCount === 2) setPinError({...pinError, showForgot: true});
        // 2 wrong codes not occurred
        else {
          setPinError({
            ...pinError,
            errorMessage: localStrings.landingScreen.pinError,
          });
          setErrorCount(count => count + 1);
        }
      }
    }
  };

  /**
   * checkSetCode method
   * @returns {void}
   */
  const checkSetCode = (code: string): void => {
    setCodeInput(code);
    setPinError(initialErrorState);
    checkAuthPin(code);
  };

  /**
   * getStoredPin method
   * @returns {Promise<void>}
   */
  const getStoredPin = async (): Promise<void> => {
    const jsonValue = await AsyncStorage.getItem(pinCodeKey);
    const localData = jsonValue !== null ? JSON.parse(jsonValue) : null;
    setLocalPin(localData);
  };

  useEffect(() => {
    getStoredPin();
  });

  /**
   * ErrorMessage component
   * @returns {JSX.Element}
   */
  const ErrorMessage = (): JSX.Element => {
    if (!isPinError) {
      return <></>;
    }
    return (
      <Text style={landingScreenStyles.errorForgotMessage}>
        {pinError.errorMessage}
      </Text>
    );
  };

  const onForgotCodeHandler = () => {
    storePinInLocal(null);
    setPinError(initialErrorState);
    setCodeInput(emptyString);
  };

  const errorOrForgot = isPinError || pinError.showForgot;
  const dynamicColor = errorOrForgot ? 'red' : 'green';

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
        keyboardType="numeric"
        style={{
          ...landingScreenStyles.codeInput,
          borderColor: dynamicColor,
          color: dynamicColor,
        }}
      />
      <ErrorMessage />
      {pinError.showForgot && (
        <TouchableOpacity onPress={onForgotCodeHandler}>
          <Text style={landingScreenStyles.errorForgotMessage}>
            Forgot Code?
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LandingScreen;
