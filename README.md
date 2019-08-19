# rn-responsive-font
> **A magical &  easy method for responsive fontSize based on screen width to support all size devices.**

## How to install 

`yarn add rn-responsive-font`

`npm install rn-responsive-font --save`

## How it looks on different devices
![rn-responsive-font](https://i.ibb.co/r2GBBxw/Screenshot-2019-06-04-at-6-56-21-PM.png)

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

>*It supports both the platforms Android & iOS*
