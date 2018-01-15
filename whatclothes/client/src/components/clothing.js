import React from "react";

const styles = {
	fontSize: "125%",
	marginTop: "10%",
	lineHeight: "200%"
};

const Clothing = (props) => {
	// re-format name to make it easier to reference in the JSX code
	let clothingname = `${props.user.name}`;

	return (
		<div className="col-lg-4" style={styles}>
			<img src={props.user.picture.medium} className="img-circle" alt={name} />
			<div>{clothingname}</div>

			<button className="btn btn-info" onClick={() => props.saveClothing(props.user)}>what you like to wear</button>
		</div>
	);
};

export default Clothing;