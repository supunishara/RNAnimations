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

class Spring extends React.Component {
  static navigationOptions = {
    title: 'Spring',
  };

  state = {
    animation: new Animated.Value(1),
  };

  handlePress = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 160,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 100,
      }).start();
    });
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          scale: this.state.animation,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
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
export default Spring;
