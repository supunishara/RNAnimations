import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  onOpacityPressed = () => {
    this.props.navigation.navigate('Opacity');
  };

  onTransitionPressed = () => {
    this.props.navigation.navigate('Translate');
  };

  onScalePressed = () => {
    this.props.navigation.navigate('Scale');
  };

  onWidthAndHeightPressed = () => {
    this.props.navigation.navigate('WidthAndHeight');
  };

  onAbsolutePressed = () => {
    this.props.navigation.navigate('AbsoluteItems');
  };
  onColorInterpolationPressed = () => {
    this.props.navigation.navigate('ColorInterpolation');
  };

  onRDIPressed = () => {
    this.props.navigation.navigate('Rotation');
  };

  onSpringressed = () => {
    this.props.navigation.navigate('Spring');
  };

  onAnimatedEventsressed = () => {
    this.props.navigation.navigate('AnimatedEvents');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onOpacityPressed}
          style={styles.singleButton}>
          <Text>Opacity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onTransitionPressed}
          style={styles.singleButton}>
          <Text>Transition XY</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onScalePressed}
          style={styles.singleButton}>
          <Text>Transition Scale</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onWidthAndHeightPressed}
          style={styles.singleButton}>
          <Text>Animate Width & Height</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onAbsolutePressed}
          style={styles.singleButton}>
          <Text>Animate AbsoluteItems</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onColorInterpolationPressed}
          style={styles.singleButton}>
          <Text>Color Interpolation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onRDIPressed}
          style={styles.singleButton}>
          <Text>Rotate Degree Interpolation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onSpringressed}
          style={styles.singleButton}>
          <Text>Spring Animation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onAnimatedEventsressed}
          style={styles.singleButton}>
          <Text>Animated Events</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  singleButton: {
    height: 20,
    width: 200,
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
