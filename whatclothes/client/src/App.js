import React from "react";
import axios from "axios";
import Clothing from "./components/clothing";

import cheerio from "cheerio";



class App extends React.Component {
	state = {
		clothing: []
	};

	componentDidMount() {
		// call api for the first time after page load
		this.getClothing();
	}

	getClothing = () => {


		axios.get("http://www.gap.com/browse/category.do?cid=8792&sop=true&mlink=1015387,,flyout_women_New_Arrivals&departmentRedirect=true&departmentId=136#pageId=0&department=136").then((res) => {
			var $ = cheerio.load(res.data);	
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
					{this.state.clothing.map((p, i) => {
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
