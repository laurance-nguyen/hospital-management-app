import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, View, Modal, TouchableOpacity } from 'react-native';
import { GradientButton, Block, Typography } from 'src/components';

import { useMutation } from 'react-apollo';
import { SIGN_OUT } from 'src/utils/graphqlMutations';

import AppData from 'src/AppData';
import { theme, mocks } from 'src/constants';

const styles = StyleSheet.create({
  popup: {
    backgroundColor: theme.colors.black2,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  popup_container: {
    backgroundColor: theme.colors.white,
    width: '50%',
    height: '50%',
  },
});

export default class SettingsScreen extends Component {
  handleSignOut = async () => {
    const [signOut, { client }] = useMutation(SIGN_OUT);
    await signOut();
    AppData.accessToken = undefined;
    props.navigation.navigate('Auth');
    await client.resetStore();
  };

  handleChangePass = async () => { };

  render() {
    const { userProfile } = AppData
    const { popupType, closePopup } = this.props
    
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={popupType>0}
        onRequestClose={() => { console.log('Modal has been closed.'); }}>
        <Block style={styles.popup} >
          <View style={styles.popup_container}>
            <Typography>Hello World!</Typography>
            <TouchableOpacity
              onPress={() => { closePopup() }}>
              <Typography>Hide Modal</Typography>
            </TouchableOpacity>
          </View>
        </Block >
      </Modal>
    )
  };
};