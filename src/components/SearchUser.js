import React from 'react';
import GitHubUser from '../services/GitHubUser';
import { LinearProgress, Button } from '@material-ui/core';
import SweetAlert from 'react-bootstrap-sweetalert/lib/dist/SweetAlert';

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
				// set modal hide
				setTimeout(() => {
					this.setState({ show: false });
				}, 2000);
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
				// set modal hide
				setTimeout(() => {
					this.setState({ show: false });
				}, 2000);
			});
	}

	render() {
		return (
			<div style={styles.containerPrimary}>
				<img
					style={styles.containerPrimary_image}
					src={require('../assets/images/GitHub_Logo.png')}
					alt="avatar"
				/>
				<SweetAlert
					show={this.state.show}
					title="Algo está errado!"
					type={'error'}
					showConfirm={false}
					style={{ borderRadius: 0 }}
				>
					<span>Tente novamente</span>
				</SweetAlert>
				<h1
					className="text-capitalize text-center"
					style={styles.containerPrimary_title}
				>
					GitHub Search User
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
								<i class="material-icons md-18">search</i>
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
		minHeight: '20%',
		height: '40px'
	},
	searchContainer_input: {
		width: '90%',
		borderRadius: '0',
		height: '40px',
		minHeight: '20%'
	}
};

export default SearchUser;
