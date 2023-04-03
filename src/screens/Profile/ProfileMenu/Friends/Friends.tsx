import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import colors from '../../../../constants/colors';
import {emptyString} from '../../../../constants/global.constants';
import localStrings from '../../../../constants/global.strings';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {checkAlternateValue} from '../../../../utils/checkAlternateValue';
import landingScreenStyles from '../../../Home/Home.styles';
import fetchUsers from '../../../../redux/users/users.api';
import {FriendsListProps} from './Friends.type';

const Friends = () => {
  // to make api call
  const dispatch = useAppDispatch();

  // to control api error states
  const [apiMessage, setApiMessage] = useState(emptyString);

  // to get api data / error values
  const {usersData, isUsersLoading, isUsersError} = useAppSelector(
    (state: any) => state.users,
  );

  // make api call on first render
  useEffect(() => {
    !usersData.length && dispatch(fetchUsers());
  }, [dispatch, usersData.length]);

  // set api loading error messages in local state
  useEffect(() => {
    isUsersLoading && setApiMessage(localStrings.home.loading);
    isUsersError && setApiMessage(localStrings.home.somethingWrong);
  }, [isUsersLoading, isUsersError]);

  const renderFriendsList = (friendsListProps: FriendsListProps) => {
    const {item: friend, index} = friendsListProps;

    return (
      <View key={index} style={friendsScreenStyles.cardContainer}>
        <View style={friendsScreenStyles.nameUserNameContainer}>
          <Text style={friendsScreenStyles.friendName}>{friend.name}</Text>
          <Text numberOfLines={1} style={friendsScreenStyles.friendUserName}>
            {friend.username}
          </Text>
        </View>
        <Text style={friendsScreenStyles.companyName}>
          {friend.company.name}
        </Text>
      </View>
    );
  };

  // if loading or error display same
  if (checkAlternateValue(isUsersLoading, isUsersError)) {
    return (
      <View style={landingScreenStyles.rootContainer}>
        <Text style={landingScreenStyles.textMessage}>{apiMessage}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={friendsScreenStyles.friendsText}>Friends</Text>
      <FlatList
        data={usersData}
        renderItem={renderFriendsList}
        fadingEdgeLength={50}
      />
    </View>
  );
};

export default Friends;

const friendsScreenStyles = StyleSheet.create({
  companyName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  nameUserNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  friendUserName: {
    width: 100,
    marginLeft: 10,
  },
  friendName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.green,
  },
  cardContainer: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 15,
    borderColor: colors.green,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 5,
  },
  friendsText: {
    fontSize: 40,
    fontWeight: '600',
    color: colors.green,
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 20,
  },
});
