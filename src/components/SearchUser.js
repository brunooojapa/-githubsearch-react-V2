import React from 'react';
import GitHubUser from '../services/GitHubUser';
import { LinearProgress, Button } from '@material-ui/core';
import { Alert } from './Alert';

class SearchUser extends React.Component {
	state = {
		show: false,
		loading: false
	};
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		this.setState({ loading: true });

		e.preventDefault();

		GitHubUser.getByUsername(this.refs.username.value)
			.then(response => {
				console.log('==== response ====');
				console.log(response);
				if (response.status === 200) {
					this.props.updateUser(response.data);
					this.setState({ loading: false });
				}
			})
			.catch(error => {
				this.setState({ show: true });
				this.setState({ loading: false });
			});

		GitHubUser.getReposByUsername(this.refs.username.value)
			.then(response => {
				console.log('==== response ====');
				console.log(response);
				if (response.status === 200) {
					this.props.updateRepos(response.data);
					this.setState({ loading: false });
				}
			})
			.catch(error => {
				this.setState({ show: true });
				this.setState({ loading: false });
			});
	}

	render() {
		return (
			<div style={styles.containerPrimary}>
				<Alert
					show={this.state.show}
					title={'Algo está errado!'}
					text={'Tente novamente'}
					type={'error'}
					onConfirm={() => this.setState({ show: false })}
				/>
				<img
					style={styles.containerPrimary_image}
					src={require('../assets/images/GitHub_Logo.png')}
					alt="avatar"
				/>

				<h1
					className="text-capitalize text-center"
					style={styles.containerPrimary_title}
				>
					GitHub Search
				</h1>

				<div className="row">
					<form onSubmit={this.handleSubmit}>
						<div
							className="form-group"
							style={styles.searchContainer}
						>
							<input
								type="text"
								ref="username"
								className="form-control"
								style={styles.searchContainer_input}
								placeholder="Ex: brunooojapa"
							/>
							<Button
								type="submit"
								color="primary"
								variant="contained"
								style={styles.searchContainer_btn}
							>
								Search user
							</Button>
						</div>

						{this.state.loading ? <LinearProgress /> : null}
					</form>
				</div>
			</div>
		);
	}
}
var styles = {
	containerPrimary: {
		padding: '5vh'
	},
	searchContainer: {
		display: 'flex'
	},
	containerPrimary_image: {
		width: '50%',
		heigh: '25%',
		marginLeft: '25%'
	},
	containerPrimary_title: {
		paddingBottom: '5%'
	},
	searchContainer_btn: {
		width: '10%',
		borderRadius: '0',
		minHeight: '20%'
	},
	searchContainer_input: {
		width: '90%',
		borderRadius: '0',
		minHeight: '20%'
	}
};

export default SearchUser;
