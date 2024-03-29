import React, { Component, createRef } from 'react';
import { TextInput, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from 'src/constants';
import styles from './InputStyles';
import Typography from '../Typography/Typography';
import Block from '../Block/Block';
import GradientButton from '../GradientButton/GradientButton';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSecure: false
    };
    this.textInputRef = createRef();
  }

  renderLabel() {
    const { label, error } = this.props;
    return (
      <View>
        {label ? (
          <Typography gray={!error} error={error}>
            {label}
          </Typography>
        ) : null}
      </View>
    );
  }

  renderToggle() {
    const { secure, rightLabel } = this.props;
    const { toggleSecure } = this.state;

    if (!secure) return null;

    return (
      <GradientButton
        style={styles.toggle}
        onPress={() => this.setState({ toggleSecure: !toggleSecure })}
      >
        {rightLabel || (
          <Icon
            color={theme.colors.gray}
            size={theme.sizes.font * 1.35}
            name={!toggleSecure ? 'eye' : 'eye-off'}
          />
        )}
      </GradientButton>
    );
  }

  renderRight() {
    const { rightLabel, rightStyle, onRightPress } = this.props;

    if (!rightLabel) return null;

    return (
      <GradientButton
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </GradientButton>
    );
  }

  renderRightText() {
    const { rightText, rightTextStyle } = this.props;

    if (!rightText) return null;

    return (
      <Typography style={[styles.toggle, rightTextStyle]} center middle>
        {rightText}
      </Typography>
    );
  }

  renderHelperText() {
    const { helperText, error } = this.props;

    return (
      <Block flex={false}>
        {error && helperText ? <Typography error={error}>{helperText[0]}</Typography> : null}
      </Block>
    );
  }

  render() {
    const { name, email, phone, number, secure, error, style, ...props } = this.props;

    const { toggleSecure } = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      props.multiline && { height: theme.sizes.padding * 10 },
      error && { borderColor: theme.colors.error },
      style
    ];

    let inputType = 'default';
    if (email || name === 'email') {
      inputType = 'email-address';
    } else if (number || name === 'cost' || name === 'price') {
      inputType = 'numeric';
    } else if (phone || name === 'phone') {
      inputType = 'phone-pad';
    } else if (name === 'password' && !isSecure && Platform.OS === 'android') {
      inputType = 'visible-password';
    }

    return (
      <Block flex={false} margin={[theme.sizes.padding, 0]}>
        {this.renderLabel()}
        <View>
          <TextInput
            style={inputStyles}
            secureTextEntry={isSecure}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={inputType}
            ref={this.textInputRef}
            {...props}
          />
          {this.renderToggle()}
          {this.renderRight()}
          {this.renderRightText()}
        </View>
        {this.renderHelperText()}
      </Block>
    );
  }
}
