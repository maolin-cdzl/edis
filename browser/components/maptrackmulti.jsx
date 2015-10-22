import React from 'react';
import ReactDOM from 'react-dom';

class MapTrackMulti extends React.Component {
	componentDidMount() {
//		var map = new BMap.Map("map_canvas");
//		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
//		map.addControl(new BMap.MapTypeControl());
//		map.addControl(new BMap.NavigationControl());
//		map.enableScrollWheelZoom();
	}
	componentWillUnmount() {
	}
	render() {
		return (
			<div id="map_canvas">
			<h4>Loading...</h4>
			</div> 
		);
	}
}

export default MapTrackMulti;
