import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(err, info) {
		this.SetState({hasError: true})
	}

	render() {
		if (this.state.hasError){
			return <h1>Ooops, something went wrong...</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundry;