import React, { Component } from 'react';

// Material design components
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

// Material design icons
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {
	render() {
		const { query, data } = this.props;

		const styles = {
			container: {
				width: '100%',
				padding: '7.5px',
			}
		};

		return (
			<aside className="search-container">
				<Grid container style={styles.container} alignItems="flex-end">
					<Grid item style={{margin: '10px auto'}}>
						<SearchIcon style={{verticalAlign: 'middle'}}/>
						<TextField id="input-with-icon-grid" label="Search" aria-label="Type to search a place" value={query} onChange={(event) => this.props.search(event.target.value)} />
					</Grid>
				</Grid>
				<Grid container style={styles.container} alignItems="flex-end">
				{
					data.map(locations => (
						<Grid item key={locations.id} style={{margin: '10px auto'}}>
							<Chip label={locations.name} onClick={(event, marker) => this.props.click(locations.pos, marker, locations)} />
						</Grid>
					))
				}
				</Grid>
			</aside>
		);
	}
}

export default Search;