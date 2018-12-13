import React , {Component,Fragment} from 'react';
import GoogleMapReact from 'google-map-react';

const TextComp = ({text}) => <div> {text} </div>;

class GoogleMap extends Component{
	static defaultProps = {
		center : {
			lat : 37.7898644,
			lng : -122.238507,
		},
		zoom : 13,
	}

	render(){
		return<div style = {{height:'100vh', width:'100%'}}>
			<GoogleMapReact
				bootstrapURLKeys = {{key:'AIzaSyAUuafTNMB3xUtEU8YllgLSJpxiVEJfyZs'}}
				defaultCenter = {this.props.center}
				defaultZoom = {this.props.zoom}
			>
			<TextComp 
				lat = {this.props.lat}
				lng = {this.props.lng}
				text = {'Office'}
			/>
			</GoogleMapReact>
		</div>
	}
} 

export default GoogleMap;
