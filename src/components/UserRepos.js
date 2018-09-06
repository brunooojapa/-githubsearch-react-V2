import React from 'react';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';

class UserRepos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reposCount: 0
		};
	}

	componentWillReceiveProps(props) {
		this.setState({ reposCount: props.repos.length });
	}

	render() {
		const { repos } = this.props;
		const reposList = repos.map((repo, key) => {
			return (
				<Card
					key={key}
					className=" col-md-5"
					style={styles.containerRepos}
				>
					<div className="caption">
						<CardContent>
							<h3 style={styles.containerRepos__name}>
								{repo.name}
								<br />
								<span
									className="badge"
									style={styles.containerRepos__star}
								>
									{repo.stargazers_count} STARS
								</span>
							</h3>
							<p style={styles.containerRepos__description}>
								{repo.description}
							</p>
						</CardContent>
						<CardActions>
							<Button
								href={repo.html_url}
								size="large"
								color="secondary"
								variant={'raised'}
								style={styles.containerPrimary_btn}
							>
								Repository
							</Button>
							<Button
								href={repo.html_url + '/issues'}
								size="large"
								color="primary"
								variant="outlined"
								style={styles.containerPrimary_btn}
							>
								Issues ({repo.open_issues})
							</Button>
						</CardActions>
					</div>
				</Card>
			);
		});

		return <div>{reposList}</div>;
	}
}

const styles = {
	containerPrimary_btn: {
		borderRadius: '0',
		minHeight: '20%',
		width: '100%'
	},
	containerRepos: {
		padding: '0',
		margin: '15px',
		paddingBottom: '20px',
		minHeight: '250px'
	},
	containerRepos__name: {
		width: '100%',
		fontSize: '20',
		display: 'block'
	},
	containerRepos__description: {
		minHeight: '80px',
		height: '80px',
		overflow: 'hidden'
	}
};

export default UserRepos;
