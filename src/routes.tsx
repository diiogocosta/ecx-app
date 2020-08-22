import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

import {configBootstrapNavigation} from './navigation/config';
import {PublicRoutes} from './navigation/public/PublicRoutes';
import {PrivateRoutes} from './navigation/private/PrivateRoutes';

const Routes = () => {
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FF3367"></ActivityIndicator>
      </View>
    );
  }
  if (!token) {
    return <PublicRoutes deepLinkUserId={deepLinkUserId} />;
  } else {
    return <PrivateRoutes></PrivateRoutes>;
  }
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Routes;
