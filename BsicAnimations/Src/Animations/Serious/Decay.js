import React from 'react';
import {
  Button,
  View,
  Text,
  PanResponder,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class Decay extends React.Component {
  static navigationOptions = {
    title: 'Decay',
  };

  state = {
    animation: new Animated.ValueXY(0),
  };

  componentWillMount() {
    this._x = 0;
    this._y = 0;

    this.state.animation.addListener(value => {
      (this._x = value.x), (this._y = value.y);
    });

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.animation.setOffset({
          x: this._x,
          y: this._y,
        });
        this.state.animation.setValue({
          x: 0,
          y: 0,
        });
      },
      onpanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y,
        },
      ]),
      onPanResponderRelease: (e, {vx, vy}) => {
        Animated.decay(this.state.animation, {
          velocity: {x: vx, y: vy},
          deceleration: 0.997,
        }).start();
      },
    });
  }

  render() {
    const animatedStyle = {
      transform: this.state.animation.getTranslateTransform(),
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animatedStyle]}
          {...this._panResponder.panHandlers}></Animated.View>
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
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});
export default Decay;
