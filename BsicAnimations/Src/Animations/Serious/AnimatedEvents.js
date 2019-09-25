import React from 'react';
import {
  Button,
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class AnimatedEvents extends React.Component {
  static navigationOptions = {
    title: 'Animated Events',
  };

  state = {
    animation: new Animated.Value(0),
  };

  //scrollEventThrottle ===> call onScreoll function in every 16 miliseconds

  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(255,99,71)', 'rgb(99, 71,255)'],
    });

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate,
    };
    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation,
                },
              },
            },
          ])}>
          <Animated.View
            style={[styles.content, backgroundStyle]}></Animated.View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000,
  },
});
export default AnimatedEvents;
