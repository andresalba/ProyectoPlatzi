import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';


function Map() {
  return (
	<GoogleMap defaultZoom={10} defaultCenter={{lat:4.6560663,lng:-74.0595918}}/>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Search() {
  return (
	<div class="item2">
		<
			WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw&callback=Map'}
			loadingElement={<div style={{height:"100%"}}/>}
			containerElement={<div style={{height:"100%"}}/>}
			mapElement={<div style={{height:"100%"}}/>}
		/>
				
	</div>
  );
}

export default Search;