# rn-responsive-font
**A easy method for responsive fontSize based on screen width to support all size devices.**

## How to install 

`yarn add rn-responsive-font`

`npm install rn-responsive-font --save`

## How it looks on different devices
![rn-responsive-font](https://github.com/AndroConsis/rn-responsive-font/blob/master/images/Screenshot%202019-06-04%20at%206.56.21%20PM.png?raw=true)

## Usage example

``` 
import React, {Component} from 'react';
import { Text, View } from 'react-native';

import resp from "rn-responsive-font";

class App extends Component {
  render() {
	  return <View style={styles.container}>
		  <Text style={styles.text}>
			  My App fits all screen
		  </Text>
	  </View>
  }
}

const styles = {
	container: {
		flex: 1, 
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		// I want idle size to be 20
		fontSize: resp(20)
	}
}
```
