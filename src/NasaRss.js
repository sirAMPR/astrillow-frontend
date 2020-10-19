import * as React from "react";
import * as Parser from "rss-parser";

let Parser = require("rss-parser");
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

class app extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: [],
		};
	}

	async componentDidMount() {
		const feed = await Parser.parseURL(
			CORS_PROXY + "https://www.nasa.gov/rss/dyn/breaking_news.rss"
		);
		this.setState(feed);
	}
}

export default function NasaRss() {
	return (
		<div>
			<h1>RSS Feed</h1>
			{this.state.items &&
				this.state.item.map((item, i) => (
					<div key={i}>
						<h1>{item.title}</h1>
						<a href="">{item.link}</a>
					</div>
				))}
		</div>
	);
}