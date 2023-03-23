import AsyncStorage from '@react-native-async-storage/async-storage';

import {pinCodeKey} from '../constants/global.constants';

export const storePinInLocal = async (code: string | null) => {
  const jsonValue = JSON.stringify(code);
  await AsyncStorage.setItem(pinCodeKey, jsonValue);
};
