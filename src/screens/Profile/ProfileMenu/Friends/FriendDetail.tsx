import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../../../../constants/colors';

const FriendDetail = (props: any) => {
  const {user} = props.route.params;

  const NameUserName = () => {
    return (
      <View style={friendDetailStyles.cardContainer}>
        <Text style={friendDetailStyles.friendName}>{user.name}</Text>
        <Text style={friendDetailStyles.userInfoText}>{user.username}</Text>
      </View>
    );
  };

  const ContactDetails = () => {
    return (
      <View style={friendDetailStyles.cardContainer}>
        <Text style={friendDetailStyles.sectionHeader}>Contact Details</Text>
        <Text style={friendDetailStyles.userInfoText}>{user.phone}</Text>
        <Text style={friendDetailStyles.userInfoText}>{user.email}</Text>
      </View>
    );
  };

  const CompanyDetails = () => {
    return (
      <View style={friendDetailStyles.cardContainer}>
        <Text style={friendDetailStyles.sectionHeader}>Company Details</Text>
        <Text style={friendDetailStyles.userInfoText}>{user.company.name}</Text>
        <Text style={friendDetailStyles.userInfoText}>
          {user.company.catchPhrase}
        </Text>
        <Text style={friendDetailStyles.userInfoText}>{user.company.bs}</Text>
        <Text style={friendDetailStyles.linkText}>{user.website}</Text>
      </View>
    );
  };

  const AddressDetails = () => {
    return (
      <View style={friendDetailStyles.cardContainer}>
        <Text style={friendDetailStyles.sectionHeader}>Address Details</Text>
        <Text style={friendDetailStyles.userInfoText}>
          {user.address.street}
        </Text>
        <Text style={friendDetailStyles.userInfoText}>
          {user.address.suite}
        </Text>
        <Text style={friendDetailStyles.userInfoText}>{user.address.city}</Text>
        <Text style={friendDetailStyles.userInfoText}>
          {user.address.zipcode}
        </Text>
        <Text style={friendDetailStyles.linkText}>get directions</Text>
      </View>
    );
  };

  return (
    <View style={friendDetailStyles.rootContainer}>
      <NameUserName />
      <ContactDetails />
      <CompanyDetails />
      <AddressDetails />
    </View>
  );
};

export default FriendDetail;

const friendDetailStyles = StyleSheet.create({
  linkText: {
    color: 'blue',
    fontSize: 16,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  userInfoText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 17,
    color: colors.black,
    marginBottom: 5,
  },
  cardContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 10,
  },
  friendName: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.green,
  },
  rootContainer: {
    padding: 20,
    flex: 1,
  },
});
