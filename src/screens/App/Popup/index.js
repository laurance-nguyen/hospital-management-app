import React, { Component } from 'react';
import { View, Modal, KeyboardAvoidingView } from 'react-native';
import { theme, generalStyles } from 'src/constants';
import { actions } from 'src/utils/reduxStore';
import { connect } from 'react-redux';
import AppConst from 'src/AppConst';
import OkCanelPopup from './OKCancelPopup';
import ChangePassPopup from './ChangePassPopup';

class Popup extends Component {
  render() {
    const { popup, hidePopup } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={popup.type !== AppConst.NO_POPUP}
        onRequestClose={() => {
          hidePopup();
        }}
      >
        <View style={[generalStyles.screen_container, { backgroundColor: theme.colors.black2 }]}>
          <KeyboardAvoidingView style={generalStyles.popup_container}>
            <OkCanelPopup />
            <ChangePassPopup />
          </KeyboardAvoidingView>
        </View>
      </Modal>
    );
  }
}

export default connect(
  ({ popup }) => ({ popup }),
  actions
)(Popup);