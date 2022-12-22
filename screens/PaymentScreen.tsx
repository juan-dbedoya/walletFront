import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const PaymentScreen = () => {
  return (
    <View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: '20%',
        }}>
        Transactions screen
      </Text>
    </View>
  );
};

export default PaymentScreen;
