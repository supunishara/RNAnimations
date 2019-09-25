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

class Opacity extends React.Component {
  state = {
    animation: new Animated.Value(1),
  };
  static navigationOptions = {
    title: 'Opacity',
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      //this callback calls after finishing this animation
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 350,
      }).start();
    });
  };
  render() {
    const animatedStyle = {
      opacity: this.state.animation,
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
export default Opacity;
