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

class Scale extends React.Component {
  static navigationOptions = {
    title: 'Translate',
  };

  state = {
    animation: new Animated.Value(1),
  };

  startAnimation = () => {
    //scale value to 2 Size
    // Animated.timing(this.state.animation, {
    //   toValue: 2,
    //   duration: 1500,
    // }).start();

    //Flip it
    Animated.timing(this.state.animation, {
      toValue: -2,
      duration: 1500,
    }).start();
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          scale: this.state.animation,
        },
      ],

      //   transform: [
      //     {
      //       scaleX: this.state.animation,
      //     },
      //   ],

      //   transform: [
      //     {
      //       scaleY: this.state.animation,
      //     },
      //   ],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text>this side Forward</Text>
          </Animated.View>
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
export default Scale;
