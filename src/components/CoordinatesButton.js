// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

	coordinates = (event) => this.props.onReceiveCoordinates([event.pageX, event.pageY])

	render(){
		return <button onClick={this.coordinates}>Get Coordinates!</button>
	}
}


export default CoordinatesButton


// 1. In the `components/CoordinatesButton.js` file, create a `CoordinatesButton` 
// React component.
// 2. This component takes in one prop: `onReceiveCoordinates`. This prop is a _function_. 
// (This props is only passed in the test suite, you will have errors in the browser)
// 3. When the button is clicked, create an array with two elements: the X and Y coordinates
//  of the mouse. Find these using the event data.
// 4. The `onReceiveCoordinates` callback prop is then called with these coordinates.