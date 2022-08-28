import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import {primary} from '../../Theme/colors';

const WideButton = props => {
  const {width, height} = useWindowDimensions();
  return (
    <Pressable
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        styles.container,
        {width: width - 40},
        props.style ? props.style : {},
        props.disabled ? {backgroundColor: 'grey'} : {},
      ]}>
      {props.isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text
          style={[styles.titleStyle, props.titleStyle ? props.titleStyle : {}]}>
          {props.title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: primary,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 10,
  },
  titleStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default WideButton;
