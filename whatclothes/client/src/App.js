import React from "react";
import axios from "axios";
import Contact from "./components/Contact";

class App extends React.Component {
	state = {
		people: []
	};

	componentDidMount() {
		// call api for the first time after page load
		this.getUsers();
	}

	getUsers = () => {
		// call api to get three random users and save in state
		axios.get("https://randomuser.me/api/?results=3&nat=us").then((res) => {
			this.setState({
				people: res.data.results
			});
		});
	};

	saveUser = (user) => {
		// when the "keep" button is clicked, save user in db
		axios.post("/save", {
			name: `${user.name.first} ${user.name.last}`,
			email: user.email,
			zip: user.location.postcode
		});

		// get three new users
		this.getUsers();
	};

	render() {
		return (
			<div className="container text-center">
				<div className="row">
					{this.state.people.map((p, i) => {
						// pass the user object into the child component
						return (
							<Contact 
								key={i} 
								user={p}
								saveUser={this.saveUser}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
