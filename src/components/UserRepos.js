import React from 'react';
import { Button, Card } from '@material-ui/core';

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
					className="thumbnail col-lg-5"
					style={styles.containerRepos}
				>
					<div className="caption">
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
						<p>
							<Button
								href={repo.html_url}
								style={styles.containerPrimary_btn}
								color="primary"
								variant="contained"
								role="button"
							>
								Repository
							</Button>
							<br />
							<br />
							<Button
								href={repo.html_url + '/issues'}
								style={styles.containerPrimary_btn}
								role="button"
								color="primary"
								variant="outlined"
							>
								Issues ({repo.open_issues}){' '}
							</Button>
						</p>
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
		minHeight: '20%'
	},
	containerRepos: {
		display: 'flex',
		marginLeft: '15px',
		minHeight: '300px'
	},
	containerRepos__name: {
		fontSize: '20'
	},
	containerRepos__description: {
		minHeight: '80px',
		height: '80px',
		overflow: 'hidden'
	}
};

export default UserRepos;
