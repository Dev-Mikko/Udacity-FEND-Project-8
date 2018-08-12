import React from 'react'
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

// Material design components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class MapContainer extends Component {
	render() {
		const { data, center, zoom, selectedPlace } = this.props;

		const styles = {
			map: {
				position: 'relative',
				width: '100%',
				height: '100%',
			},
			card: {
				textAlign: 'center',
				maxWidth: '200px',
			},
			title: {
				fontSize: '16px',
			},
			divider: {
				margin: '10px 0',
			},
			type: {
				fontWeight: 'bold',
				marginBottom: '10px',
			}
		}

		return (
			<Map google={this.props.google} onClick={this.props.onClickMap} initialCenter={center} center={center} zoom={zoom} style={styles.map}>
				{
					data.map((uni) => (
						<Marker key={uni.id} id={uni.id} tabIndex='0' 
						aria-label={`Marker for ${uni.name}`} onClick={(event, marker) => this.props.onClickMarker(uni.pos, marker, uni)}
						name={uni.name} position={uni.pos} animation={this.props.google.maps.Animation.DROP} />))
				}
				<InfoWindow marker={this.props.marker} visible={this.props.onVisible} onClose={this.props.onClose}>
					<Card style={styles.card}>
						<CardContent>
							<Typography variant="title" style={styles.title}>{selectedPlace.name}</Typography>
							<Divider style={styles.divider} />
							<Typography style={styles.type}>{selectedPlace.type}</Typography>
							<Typography>
								{selectedPlace.address}
							</Typography>
						</CardContent>
					</Card>
				</InfoWindow>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: '',
})(MapContainer)