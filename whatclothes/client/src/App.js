import React from "react";
import axios from "axios";
import Contact from "./components/clothing";

class App extends React.Component {
	state = {
		clothing: []
	};

	componentDidMount() {
		// call api for the first time after page load
		this.getClothing();
	}

	getClothing = () => {
		// call api to get three random users and save in state
		axios.get("https://randomuser.me/api/?results=3&nat=us").then((res) => {
			this.setState({
				clothing: res.data.results
			});
		});
	};

	saveClothing = (user) => {
		// when the "keep" button is clicked, save user in db
		axios.post("/save", {
			name: `${user.name.first}`,
			photo: user.picture.medium
		});

		// get three new users
		this.getClothing();
	};

	render() {
		return (
			<div className="container text-center">
				<div className="row">
					{this.state.people.map((p, i) => {
						// pass the user object into the child component
						return (
							<Clothing 
								key={i} 
								user={p}
								saveClothing={this.saveClothing}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
