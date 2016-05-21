'use strict';

/**
 * How to React with Tars:
 * 1. npm install --save react react-dom babel-preset-react babel-loader babel-core
 * 2. open .babelrc  -->  "presets": ["es2015", "react"]
 * {@link https://facebook.github.io/react/docs/package-management.html}
 *
 *
 */

/*
 This file can be used as entry point for webpack!
 */

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// TODO: как сделать чтоб это не грузилось на странице на которой не нужно)))
import exampleBuild_NameNotImportant from 'modules/exampleBuild/exampleBuild';

var Timer = React.createClass({
	getInitialState: function() {
		return {
			timeLeft: this.props.duration
		}
	},
	tick() {
		if (this.state.timeLeft > 0) {
			let i = this.state.timeLeft;
			i--;
			this.setState( {timeLeft: i} )
		} else {
			clearInterval( this.timer );
		}
	},
	componentDidMount: function() {
		this.timer = setInterval( this.tick, 1000 );
	},
	componentWillMount: function () {
		clearInterval( this.timer );
	},
	render: function () {
		return <div>{this.state.timeLeft} seconds left.</div>
	}
});


ReactDOM.render(
	<Timer duration="10"/>,
	document.getElementById('content')
);
