import React from 'react';
import { Link } from 'react-router';
export default class Home extends React.Component{
	render(){
		return(
			<div className="home__container">
				<h1> Home Page </h1>

				<Link className="link_to_page_two" to={'/page_two'}>Go to page 2</Link>
			</div>
		);
	}
}