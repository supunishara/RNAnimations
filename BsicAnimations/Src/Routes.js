import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Opacity from './Animations/Opacity';
import Translate from './Animations/Translate';
import Scale from './Animations/Scale';
import WidthAndHeight from './Animations/WidthAndHeight';
import AbsoluteItems from './Animations/AbsoluteItems';
import ColorInterpolation from './Animations/ColorInterpolation';
import Rotation from './Animations/Rotation';
import AnimatedEvents from './Animations/Serious/AnimatedEvents';

//Serious Animations
import Spring from './Animations/Serious/Spring';

const Project = createStackNavigator({
  Home: {
    screen: Home,
  },
  Opacity: {
    screen: Opacity,
  },
  Translate: {
    screen: Translate,
  },
  Scale: {
    screen: Scale,
  },
  WidthAndHeight: {
    screen: WidthAndHeight,
  },
  AbsoluteItems: {
    screen: AbsoluteItems,
  },
  ColorInterpolation: {
    screen: ColorInterpolation,
  },
  Rotation: {
    screen: Rotation,
  },
  Spring: {
    screen: Spring,
  },
  AnimatedEvents: {
    screen: AnimatedEvents,
  },
});
export default createAppContainer(Project);
