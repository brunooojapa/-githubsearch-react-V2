import React from 'react';
import SearchUser from './SearchUser';
import UserInfo from './UserInfo';
import { Button } from '@material-ui/core';

class GitHub extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			repos: []
		};
		this.updateUser = this.updateUser.bind(this);
		this.updateRepos = this.updateRepos.bind(this);
	}

	updateUser(user) {
		this.setState({ user: user });
	}

	updateRepos(repos) {
		this.setState({ repos: repos });
	}

	render() {
		return (
			<div className="container ">
				{this.state.user == null ? (
					<SearchUser
						updateUser={this.updateUser}
						updateRepos={this.updateRepos}
					/>
				) : (
					<div>
						<Button
							style={styles.containerPrimary_btn}
							type="submit"
							color="primary"
							variant="contained"
							onClick={() => this.setState({ user: null })}
						>
							Back
						</Button>
						<UserInfo
							user={this.state.user}
							repos={this.state.repos}
						/>
					</div>
				)}
				<h6 className="text-center">made by brunooojapa</h6>
			</div>
		);
	}
}

const styles = {
	containerPrimary_btn: {
		width: '10%',
		borderRadius: '0',
		minHeight: '20%',
		marginTop: '3%',
		marginBottom: '3%'
	}
};

export default GitHub;
