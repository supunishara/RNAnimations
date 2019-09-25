import React from 'react';
import {
  Button,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class Rotation extends React.Component {
  static navigationOptions = {
    title: 'Rotate Degree Interpolation',
  };

  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500,
    }).start();
  };

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

    const animatedStyle = {
      transform: [
        {
          rotate: rotateInterpolate,
          //   rotateX: rotateInterpolate
        },
      ],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Width,
    height: Height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});
export default Rotation;
