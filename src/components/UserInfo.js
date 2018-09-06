import React from 'react';

import UserRepos from './UserRepos';
import { Button, Divider } from '@material-ui/core';

const UserInfo = ({ user, repos }) => {
	var userInfo = user ? (
		<div className="row">
			<div className="col-lg-2">
				<img
					className="img-circle"
					src={user.avatar_url}
					alt="avatar"
					width="140"
					height="140"
				/>
				<h2 style={styles.containerPrimary_log}>{user.login}</h2>
				<p style={styles.containerPrimary_name}>{user.name}</p>
				<Divider />
				<p style={styles.containerPrimary_bio}>{user.bio}</p>
				<Divider />
				<div style={styles.containerPrimary_follow}>
					<p>Followers: {user.followers}</p>
					<p> Following: {user.following}</p>
				</div>
				<Divider />
				<Button
					href={
						'https://www.google.com.br/maps/place/' + user.location
					}
					style={styles.containerPrimary_btn}
					color="primary"
					variant="outlined"
				>
					<i class="material-icons md-12">location_on</i>
					{user.location}
				</Button>

				<p>
					<Button
						style={styles.containerPrimary_btn}
						href={user.html_url}
						role="button"
						color="primary"
						variant="contained"
					>
						<i class="material-icons md-12">more_horiz</i>
						View details
					</Button>
				</p>
			</div>
			<div className="col-lg-10">
				<UserRepos repos={repos} />
			</div>
		</div>
	) : null;

	return userInfo;
};

const styles = {
	containerPrimary_btn: {
		borderRadius: '0',
		minHeight: '20%',
		marginTop: '10px',
		marginBotton: '20px'
	},

	containerPrimary_log: {
		fontWeight: 'bold',
		fontSize: '20px'
	},
	containerPrimary_name: {
		fontSize: '18px'
	},
	containerPrimary_bio: {
		paddingTop: '5px',
		lineHeight: 'normal'
	},
	containerPrimary_follow: {
		paddingTop: '5px'
	},
	containerPrimary_location: {
		paddingTop: '5px'
	}
};

export default UserInfo;
