import React from 'react';
import ReactDOM from 'react-dom';

class MapTrackMulti extends React.Component {
	constructor(props) {
		super(props);
		this.map = null;
	}
	componentDidMount() {
//		if( this.map == null ) {
//			console.log('new map');
//			this.map = new BMap.Map("map_canvas");
//			this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
//			this.map.addControl(new BMap.MapTypeControl());
//			this.map.addControl(new BMap.NavigationControl());
//			this.map.enableScrollWheelZoom();
//		}
	}
	componentWillUnmount() {
		console.log('release map');
		this.map = null;
	}
	render() {
		return (
			<div id="map_canvas" style={{'width': '100%', 'height':'600px', 'border':'1px solid gray'}}>
			<h4>Loading...</h4>
			</div> 
		);
	}
}

export default MapTrackMulti;
