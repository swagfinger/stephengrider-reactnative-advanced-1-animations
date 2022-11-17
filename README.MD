# Advanced React Native - Stephen Grider

- we will use Expo for running react native apps

## Options for running React Native

- Expo / Expo Go (App) - running react native apps on real device (device APIs, push notifications, device testing, extra components)
- React Native CLI (basic components / device apis / difficult setup for simulators)

## Expo Dev Tools

tutorial source - https://github.com/StephenGrider/AdvancedReactNative

EXPO XDE has been replaced by Expo Dev Tools
https://blog.expo.dev/expo-cli-2-0-released-a7a9c250e99c

Expo CLI replaces our previous tools exp (a CLI) and XDE (a desktop app), by providing both an improved version of the familiar command-line interface and a graphical interface running in the browser. It also powers the latest version of Create React Native App.

## install expo

```cmd
npm install -g expo-cli
```

## create a project

NOTE: expo cli recommends using below instead of 'expo init'

```cmd
npx create-expo-app --template
```

# Animations by making a Tinder Like Project

## ReactNative animation systems

- Animated (can make more complex animations)
- LayoutAnimation (simple animation)

## Animated properties

- Animated.Value
- Animated.Types
- Animated.Components

### Animating

- animation happens outside the render() of react, <Animated> has its own animation timeline not nsync with render()

1. ValueXY - 'position' = anypoint in time {x:0, y:0}

```js
const position = new Animated.ValueXY(0, 0); //start value
```

2. Animated.spring animates - do an animation by moving 'position' (doesnt say what we moving)

```js
useEffect(() => {
  Animated.spring(position, { toValue: { x: 200, y: 500 } }).start();
}, []);
```

3. <Animated.View> asigns via 'style' a position.getLayout(),

```js
return (
  <Animated.View style={position.getLayout()}>
    <View style={styles.ball} />
  </Animated.View>
);
```

```js
import { Animated } from 'react-animation';

Animated.Value.Value;
Animated.Value.ValueXY; //'position' = anypoint in time {x:0, y:0}

Animated.Types.Spring; //do an animation by moving 'position' (doesnt say what we moving)
Animated.Types.Decay;
Animated.Types.Timing;

Animated.Components.View; // thing we want to animate - use style={} asign an animation by style={position.getLayout()}
Animated.Components.Text;
Animated.Components.Image;
```

## Gesture

### PanResponder - https://reactnative.dev/docs/panresponder.html

why useRef? - useRef will give you the same ref object on every render.

## defaultProps vs default parameters

defaultProps will be deprecated (or is already deprecated), use default parameters

## updating index with setIndex

- dont forget to use previous state value to update state

```js
setIndex((oldIndex) => oldIndex + 1);
```
